import PackageHelper from '../../helper/package';
import ResourceHelper from '../../helper/resource';
import RouteHelper from '../../helper/route';
import _ from 'lodash';

/* eslint-disable no-undef */

describe('package', () => {
  let packagesCreated;

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
    const packages = PackageHelper.mock({
      length: 2,
      questionLength: 20,
    });
    packagesCreated = _.clone(packages);

    await ResourceHelper.create({
      modelValues: packages,
      nextRoute: 'app.package.list',
      route: 'app.package.create',
      targetVar: 'packages',
    });
  });

  it('list', async() => {
    await RouteHelper.go('app.package.list');

    const records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toBeGreaterThan(1);
  });

  it('search', async() => {
    let searchValue;
    let records;
    let columnRow1;

    const table = element(by.tagName('md-table-container'));

    searchValue = {
      name: packagesCreated[0].name,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.name'));
    expect(await columnRow1.getText()).toContain(packagesCreated[0].name);

    searchValue = {
      sanction: packagesCreated[1].sanction,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.sanction'));
    expect(await columnRow1.getText()).toContain(packagesCreated[1].sanction);

    await table.evaluate('clearSearch()');
  });

  it('update', async() => {
    const pkg = await ResourceHelper.query({
      model: 'Package',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            name: packagesCreated[0].name,
          },
        },
      },
    });
    const packageUpdate = {
      name: 'Package Updated',
      sanction: -27,
      sanctionTrigger: 7,
    };
    await ResourceHelper.update({
      modifier: (m) => {
        const modelValue = _.clone(m);
        modelValue.package.name = packageUpdate.name;
        modelValue.package.sanction = packageUpdate.sanction;
        modelValue.package.sanctionTrigger = packageUpdate.sanctionTrigger;
        return modelValue;
      },
      route: 'app.package.update',
      routeParams: {
        id: pkg.id,
      },
      nextRoute: 'app.package.list',
    });

    const packageNew = await ResourceHelper.query({
      model: 'Package',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            id: pkg.id,
          },
        },
      },
    });
    expect(packageNew.name).toEqual(packageUpdate.name);
    expect(packageNew.sanction).toContain(packageUpdate.sanction);
    expect(packageNew.sanctionTrigger).toEqual(packageUpdate.sanctionTrigger);
  });

  it('delete', async() => {
    const packages = await ResourceHelper.query({
      model: 'Package',
      method: 'find',
      param1: {
        filter: {
          where: {
            name: {
              like: 'PackageTest%',
            }
          },
        },
      },
    });
    
    await ResourceHelper.delete({
      route: 'app.package.list',
      instances: packages,
    });

    for(const pkg of packages) {
      await ResourceHelper.query({
        model: 'Package',
        method: 'questions.destroyAll',
        param1: {
          id: pkg.id,
        },
      });
    }
  });

  it('logout', async() => {
    await RouteHelper.go('app.logout');
    expect((await RouteHelper.current()).name).toEqual('app.login');
  });
});