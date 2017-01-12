import ResourceHelper from '../../helper/resource';
import RouteHelper from '../../helper/route';
import _ from 'lodash';

/* eslint-disable no-undef */

describe('user', () => {
  let usersCreated;

  beforeEach(async() => {
    await browser.waitForAngular();
  });

  it('login', async() => {
    await browser.sleep(3000);
    element(by.model('user.email')).sendKeys(ADMIN_CREDENTIAL.email);
    element(by.model('user.password')).sendKeys(ADMIN_CREDENTIAL.password);
    element(by.css('button[type=button].md-primary.md-raised')).click();

    expect((await RouteHelper.current()).name).toEqual('app.dashboard');
  });

  it('create', async() => {
    const randomNumber = _.round(_.random(1, 100, true), 2);
    const users = [{
      role: 'admin',
      email: `admin${randomNumber}@die.life`,
      name: `AdminTest${randomNumber}`,
      password: ADMIN_CREDENTIAL.password,
    }, {
      role: 'guru',
      email: `guru${randomNumber}@die.life`,
      name: `GuruTest${randomNumber}`,
      password: GURU_CREDENTIAL.password,
    }, {
      role: 'participant',
      email: `participant${randomNumber}@die.life`,
      username: `ID${randomNumber}`,
      name: `ParticipantTest${randomNumber}`,
      password: PARTICIPANT_CREDENTIAL.password,
    }, {
      role: 'participant',
      email: `participant2${randomNumber}@die.life`,
      username: `ID2${randomNumber}`,
      name: `ParticipantTest2${randomNumber}`,
      password: PARTICIPANT_CREDENTIAL.password,
    }, {
      role: 'participant',
      email: `participant3${randomNumber}@die.life`,
      username: `ID3${randomNumber}`,
      name: `ParticipantTest3${randomNumber}`,
      password: PARTICIPANT_CREDENTIAL.password,
    }];
    usersCreated = _.clone(users);

    await ResourceHelper.create({
      modelValues: users,
      nextRoute: 'app.user.list',
      route: 'app.user.create',
      targetVar: 'users',
    });
  });

  it('list', async() => {
    await RouteHelper.go('app.user.list');

    const records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toBeGreaterThan(2);
  });

  it('search', async() => {
    let searchValue;
    let records;
    let columnRow1;

    const table = element(by.tagName('md-table-container'));

    searchValue = {
      email: usersCreated[0].email,
      roles: usersCreated[0].role,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.email'));
    expect(await columnRow1.getText()).toEqual(usersCreated[0].email);

    searchValue = {
      email: usersCreated[1].email,
      roles: usersCreated[1].role,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.email'));
    expect(await columnRow1.getText()).toEqual(usersCreated[1].email);

    searchValue = {
      name: usersCreated[2].name,
      roles: usersCreated[2].role,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.name'));
    expect(await columnRow1.getText()).toEqual(usersCreated[2].name);

    searchValue = {
      username: usersCreated[2].username,
      roles: usersCreated[2].role,
    };
    await ResourceHelper.search({
      table,
      searchValue,
    });

    records = await element.all(by.repeater('record in crud.records'));
    expect(records.length).toEqual(1);
    columnRow1 = await element(by.repeater('record in crud.records').row(0).column('record.username'));
    expect(await columnRow1.getText()).toEqual(usersCreated[2].username);

    await table.evaluate('clearSearch()');
  });

  it('delete', async() => {
    const users = await ResourceHelper.query({
      model: 'Person',
      method: 'findByRoles',
      param1: {
        roles: 'admin,guru',
        filter: {
          where: {
            name: {
              like: '%Test%',
            }
          },
        },
      },
    });
    await ResourceHelper.delete({
      route: 'app.user.list',
      instances: users,
    });
  });

  it('update', async() => {
    const user = await ResourceHelper.query({
      model: 'Person',
      method: 'findOne',
      param1: {
        filter: {
          where: {
            email: ADMIN_CREDENTIAL.email,
          },
        },
      },
    });

    const userUpdate = {
      name: 'Admin Updated',
      email: 'adminupdated@mailinator.com',
      password: '12345678',
    };
    await ResourceHelper.update({
      modifier: (m) => {
        const modelValue = _.clone(m);
        modelValue.user.name = userUpdate.name;
        modelValue.user.email = userUpdate.email;
        modelValue.user.password = userUpdate.password;
        return modelValue;
      },
      route: 'app.user.update',
      routeParams: {
        id: user.id,
      },
      nextRoute: 'app.user.list',
    });

    await RouteHelper.go('app.logout');

    expect((await RouteHelper.current()).name).toEqual('app.login');

    element(by.model('user.email')).sendKeys(userUpdate.email);
    element(by.model('user.password')).sendKeys(userUpdate.password);
    element(by.css('button[type=button].md-primary.md-raised')).click();

    expect((await RouteHelper.current()).name).toEqual('app.dashboard');

    await ResourceHelper.update({
      modifier: (m) => {
        const modelValue = _.clone(m);
        modelValue.user.name = user.name;
        modelValue.user.email = user.email;
        modelValue.user.password = ADMIN_CREDENTIAL.password;
        return modelValue;
      },
      route: 'app.user.update',
      routeParams: {
        id: user.id,
      },
      nextRoute: 'app.user.list',
    });
  });

  it('logout', async() => {
    await RouteHelper.go('app.logout');
    expect((await RouteHelper.current()).name).toEqual('app.login');
  });
});