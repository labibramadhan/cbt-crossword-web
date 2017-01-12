import PackageScheduleHelper from '../../helper/package-schedule';
import ResourceHelper from '../../helper/resource';
import RouteHelper from '../../helper/route';
import _ from 'lodash';

/* eslint-disable no-undef */

describe('schedule', () => {
  let schedulesCreated;

  beforeEach(async function() {
    await browser.waitForAngular();
    this.pkg = await ResourceHelper.query({
      model: 'Package',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            name: 'Package Updated',
          },
        },
      },
    });
  });

  it('login', async() => {
    element(by.model('user.email')).sendKeys(GURU_CREDENTIAL.email);
    element(by.model('user.password')).sendKeys(GURU_CREDENTIAL.password);
    element(by.css('button[type=button].md-primary.md-raised')).click();

    expect((await RouteHelper.current()).name).toEqual('app.dashboard');
  });

  it('create', async function() {
    await RouteHelper.go('app.package.schedule.list', {
      package_id: this.pkg.id,
    });

    const table = element(by.tagName('md-table-container'));

    const schedules = PackageScheduleHelper.mock({
      length: 2,
    });

    schedulesCreated = schedules;

    for (const schedule of schedules) {
      await table.evaluate('addEditDialog()');
      const dialog = element(by.tagName('md-dialog'));
      await browser.executeScript((el, schedule) => {
        schedule.start = new Date(schedule.start);
        schedule.end = new Date(schedule.end);

        angular.element(el).scope().$evalAsync('schedule = scheduleValue', {
          scheduleValue: schedule,
        });
      }, dialog, schedule);
      await dialog.evaluate('submit()');
    }
  });

  it('list', async function() {
    await RouteHelper.go('app.package.schedule.list', {
      package_id: this.pkg.id,
    });

    const records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toBeGreaterThan(0);
  });

  it('search', async() => {
    let searchValue;
    let records;
    let columnRow1;

    const table = element(by.tagName('md-table-container'));
    const schedule = await ResourceHelper.query({
      model: 'PackageSchedule',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            name: schedulesCreated[1].name,
          },
        },
      },
    });

    searchValue = {
      name: schedulesCreated[0].name,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.name'));
    expect(await columnRow1.getText()).toContain(schedulesCreated[0].name);

    searchValue = {
      code: schedule.code,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.code'));
    expect(await columnRow1.getText()).toContain(schedule.code);

    await table.evaluate('clearSearch()');
  });

  it('update', async() => {
    const schedule = await ResourceHelper.query({
      model: 'PackageSchedule',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            name: schedulesCreated[0].name,
          },
        },
      },
    });

    const mockedSchedules = PackageScheduleHelper.mock({
      length: 1,
    });
    const scheduleUpdate = mockedSchedules[0];
    scheduleUpdate.name = 'Schedule Updated';
    scheduleUpdate.showGrade = 1;

    const table = element(by.tagName('md-table-container'));
    await browser.executeScript((el, schedule) => {
      angular.element(el).scope().$evalAsync('addEditDialog(null, schedule)', {
        schedule,
      });
    }, table, schedule);

    const dialog = element(by.tagName('md-dialog'));
    await browser.executeScript((el, schedule) => {
      schedule.start = new Date(schedule.start);
      schedule.end = new Date(schedule.end);

      angular.element(el).scope().$evalAsync('schedule = scheduleValue', {
        scheduleValue: schedule,
      });
    }, dialog, _.extend(schedule, scheduleUpdate));

    await dialog.evaluate('submit()');

    const scheduleNew = await ResourceHelper.query({
      model: 'PackageSchedule',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            id: schedule.id,
          },
        },
      },
    });
    expect(scheduleNew.name).toEqual(scheduleUpdate.name);

    await table.evaluate('clearSearch()');
  });

  it('delete', async() => {
    const schedule = await ResourceHelper.query({
      model: 'PackageSchedule',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            name: schedulesCreated[1].name,
          },
        },
      },
    });
    
    const table = element(by.tagName('md-table-container'));
    await table.evaluate(`delete('${schedule.id}')`);
  });

  it('logout', async() => {
    await RouteHelper.go('app.logout');
    expect((await RouteHelper.current()).name).toEqual('app.login');
  });
});
