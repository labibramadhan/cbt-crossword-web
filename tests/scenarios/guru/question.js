import QuestionHelper from '../../helper/question';
import ResourceHelper from '../../helper/resource';
import RouteHelper from '../../helper/route';
import _ from 'lodash';

/* eslint-disable no-undef */

describe('question', () => {
  let questionsCreated;

  beforeEach(async() => {
    await browser.waitForAngular();
  });

  it('login', async() => {
    element(by.model('user.email')).sendKeys(GURU_CREDENTIAL.email);
    element(by.model('user.password')).sendKeys(GURU_CREDENTIAL.password);
    element(by.css('button[type=button].md-primary.md-raised')).click();

    expect((await RouteHelper.current()).name).toEqual('app.dashboard');
  });

  it('create', async() => {
    const questions = QuestionHelper.mock({
      length: 3,
    });
    questionsCreated = _.clone(questions);

    await ResourceHelper.create({
      modelValues: questions,
      nextRoute: 'app.question.list',
      route: 'app.question.create',
      targetVar: 'questions',
    });
  });

  it('list', async() => {
    await RouteHelper.go('app.question.list');

    const records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toBeGreaterThan(2);
  });

  it('search', async() => {
    let searchValue;
    let records;
    let columnRow1;

    const table = element(by.tagName('md-table-container'));

    searchValue = {
      question: questionsCreated[0].question,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.question'));
    expect(await columnRow1.getText()).toContain(questionsCreated[0].question);

    searchValue = {
      answer: questionsCreated[1].answer,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.answer'));
    expect(await columnRow1.getText()).toContain(questionsCreated[1].answer);

    searchValue = {
      tag: questionsCreated[2].tag,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.tag'));
    expect(await columnRow1.getText()).toContain(questionsCreated[2].tag);

    await table.evaluate('clearSearch()');
  });

  it('update', async() => {
    const question = await ResourceHelper.query({
      model: 'Question',
      method: 'findOne',
      param1: {
        filter: {
          where: _.omit(questionsCreated[0], 'question'),
        },
      },
    });
    const questionUpdate = {
      question: 'Question Updated',
      answer: 'Answer Updated',
      tag: 'Tag Updated',
    };
    await ResourceHelper.update({
      modifier: (m) => {
        const modelValue = _.clone(m);
        modelValue.question.question = questionUpdate.question;
        modelValue.question.answer = questionUpdate.answer;
        modelValue.question.tag = questionUpdate.tag;
        return modelValue;
      },
      route: 'app.question.update',
      routeParams: {
        id: question.id,
      },
      nextRoute: 'app.question.list',
    });

    const questionNew = await ResourceHelper.query({
      model: 'Question',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            id: question.id,
          },
        },
      },
    });
    expect(questionNew.question).toContain(questionUpdate.question);
    expect(questionNew.answer).toContain(questionUpdate.answer);
    expect(questionNew.tag).toContain(questionUpdate.tag);

    await ResourceHelper.update({
      modifier: (m) => {
        const modelValue = _.clone(m);
        modelValue.question.question = question.question;
        modelValue.question.answer = question.answer;
        modelValue.question.tag = question.tag;
        return modelValue;
      },
      route: 'app.question.update',
      routeParams: {
        id: question.id,
      },
      nextRoute: 'app.question.list',
    });
  });

  it('delete', async() => {
    const questions = await ResourceHelper.query({
      model: 'Question',
      method: 'find',
      param1: {
        filter: {
          where: {
            question: {
              like: '%QuestionTest%',
            }
          },
        },
      },
    });
    await ResourceHelper.delete({
      route: 'app.question.list',
      instances: questions,
    });
  });

  it('logout', async() => {
    await RouteHelper.go('app.logout');
    expect((await RouteHelper.current()).name).toEqual('app.login');
  });
});
