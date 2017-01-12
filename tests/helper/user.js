import ResourceHelper from './resource';

const clean = async() => {
  const users = await ResourceHelper.query({
    model: 'Person',
    method: 'findByRoles',
    param1: {
      roles: 'participant',
      filter: {
        where: {
          username: {
            neq: '12345',
          },
        },
        fields: {
          id: true,
        },
      },
    },
  });

  for (const user of users) {
    await ResourceHelper.query({
      model: 'Person',
      method: 'deleteById',
      param1: {
        id: user.id,
      },
    });
  }
};

export default {
  clean,
}
