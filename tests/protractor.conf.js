import PackageHelper from './helper/package';
import PackageScheduleHelper from './helper/package-schedule';
import QuestionHelper from './helper/question';
import UserHelper from './helper/user';
import _ from 'lodash';

/* eslint-disable no-undef,angular/window-service */

exports.config = {
  allScriptsTimeout: 40000,
  specs: [
    'scenarios/admin/user.js',
    'scenarios/guru/question.js',
    'scenarios/guru/package.js',
    'scenarios/guru/package-schedule.js',
    'scenarios/participant/test.js',
  ],
  capabilities: {
    'browserName': 'chrome',
  },
  baseUrl: 'http://localhost:8585/',
  framework: 'jasmine',
  restartBrowserBetweenTests: false,
  verboseMultiSessions: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000,
  },

  plugins: [{
    package: 'protractor-console',
    logLevels: ['severe'],
  }],
  onPrepare: async() => {
    require('jasmine-expect');

    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true,
      },
    }));

    const failFast = require('jasmine-fail-fast');
    jasmine.getEnv().addReporter(failFast.init());

    await browser.get(browser.baseUrl);
    await browser.waitForAngular();

    const constants = require('./helper/const');
    _.forEach(constants, (constantValue, constantKey) => {
      global[constantKey] = constantValue;
    });

    const RouteHelper = require('./helper/route');
    global.routes = await RouteHelper.populate();

    await browser.executeScript(() => {
      window.testMode = true;
    });


    // CLEANING
    await PackageScheduleHelper.clean();
    await PackageHelper.clean();
    await QuestionHelper.clean();
    await UserHelper.clean();
  },

};