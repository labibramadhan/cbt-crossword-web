import CommonHelper from '../../helper/common';
import ResourceHelper from '../../helper/resource';
import RouteHelper from '../../helper/route';
import _ from 'lodash';

/* eslint-disable no-undef */

describe('test', () => {
  beforeEach(async function () {
    await browser.waitForAngular();
  });

  let users = [];
  let packageSchedule;
  it('filling', async() => {
    packageSchedule = await ResourceHelper.query({
      model: 'PackageSchedule',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            name: 'Schedule Updated'
          },
          limit: 3,
        },
      },
    });

    users = await ResourceHelper.query({
      model: 'Person',
      method: 'findByRoles',
      param1: {
        roles: 'participant',
        filter: {},
      },
    });

    for (const user of users) {
      // LOGIN
      const loginButton = element(by.css('button[type=button].md-primary.md-raised'));
      await loginButton.evaluate('loginType = "participant"');
      await loginButton.evaluate('$apply()');

      element(by.model('user.username')).sendKeys(user.username);
      element(by.model('user.password')).sendKeys(PARTICIPANT_CREDENTIAL.password);
      loginButton.click();

      expect((await RouteHelper.current()).name).toEqual('app.dashboard');


      // START
      const codeField = element(by.model('model.code'));
      codeField.sendKeys(packageSchedule.code);
      codeField.evaluate('doTest()');

      expect((await RouteHelper.current()).name).toEqual('app.test.start');

      // FILL
      let expectedScore;
      let expectedAnswers;
      await browser.sleep(1000);

      const parentElement = await element(by.id('test-panel'));

      const testDownQuestions = await element.all(by.repeater("cell in legends['down']"));
      const testAcrossQuestions = await element.all(by.repeater("cell in legends['across']"));

      expect(testDownQuestions.length).not.toBe(0);
      expect(testAcrossQuestions.length).not.toBe(0);

      const answerCollection = [];
      for (const questions of [testDownQuestions, testAcrossQuestions]) {
        for (const elQuestion of questions) {
          const button = await elQuestion.element(by.tagName('button'));

          expect(button.isPresent()).toBe(true);

          const cell = await button.evaluate('cell');
          expect(cell).toEqual(jasmine.any(Object));

          await button.evaluate('fill(null, cell.position, cell.type)');

          const giveCorrectAnswer = _.sample([false, true, true]);
          const answerValue = (giveCorrectAnswer) ?
            cell.word : CommonHelper.randomChars(cell.word.length);

          const dialog = await element(by.tagName('md-dialog'));
          await dialog.element(by.model('model.value')).sendKeys(answerValue);

          const actionName = (giveCorrectAnswer) ? 'actionSure' : 'actionUnsure';
          await browser.executeScript((el, action) => {
            angular.element(el).scope().$evalAsync(`${action}()`);
          }, dialog, actionName);

          answerCollection.push({
            cell,
            answer: answerValue,
            correct: giveCorrectAnswer,
            remark: (giveCorrectAnswer) ? 1 : 0,
          });
        }
      }

      const answers = expectedAnswers = await parentElement.evaluate('buildAnswer()');
      for (const answerData of answerCollection) {
        const answer = _.find(answers, {
          question_id: answerData.cell.id,
        });
        expect(answer).toBeDefined();
        expect(answer.remark).toEqual(answerData.remark);
        if (answer.correct) {
          expect(answer.answer).toEqual(answerData.answer);
          expect(answer.correct).toEqual(answerData.correct);
        }
      }

      const correctAnswers = _.find(answers, {
        correct: true,
      });
      const correctAnswersLength = _.get(correctAnswers, 'length', 0);
      const singleScore = 100 / packageSchedule.questionTotal;
      expectedScore = singleScore * correctAnswersLength;

      await parentElement.evaluate('finish()');


      // FINISH
      expect((await RouteHelper.current()).name).toEqual('app.test.finish');

      const resultDownQuestions = await element.all(by.repeater("cell in legends['down']"));
      const resultAcrossQuestions = await element.all(by.repeater("cell in legends['across']"));

      expect(resultDownQuestions.length).not.toBe(0);
      expect(resultAcrossQuestions.length).not.toBe(0);

      for (const questions of [resultDownQuestions, resultAcrossQuestions]) {
        for (const elQuestion of questions) {
          const cell = await elQuestion.evaluate('cell');
          const cellRemark = await elQuestion.evaluate('cellRemark');
          const answer = _.find(expectedAnswers, {
            question_id: cell.id,
          });
          expect(answer.remark).toEqual(cellRemark);
        }
      }

      expect(await element(by.binding('answer.grade')).getText()).toEqual(expectedScore);


      // LOGOUT
      await RouteHelper.go('app.logout');
      expect((await RouteHelper.current()).name).toEqual('app.login');
    }
  });
});