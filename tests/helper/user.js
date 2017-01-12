import ResourceHelper from './resource';

const clean = async() => {
  const users = await ResourceHelper.query({
    model: 'Person',
    method: 'find',
    param1: {
      filter: {
        where: {
          name: {
            like: '%Test%',
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