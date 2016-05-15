import User from '../app/models/user';
import Task from '../app/models/task';
import range from '../app/utils/range';
import faker from 'faker';

export default async () => {
  await Promise.all(
    [...range(1, 10)].map(n => {
      return User.create({
        name: `Matthew ${faker.name.lastName()}`,
        email: faker.internet.email(),
        newsletter: faker.random.boolean()
      });
    })
  );

  await Promise.all(
    [...range(1, 100)].map(n => {
      return Task.create({
        title: faker.hacker.phrase(),
        isComplete: faker.random.boolean(),
        userId: faker.helpers.randomize([...range(1, 10)])
      });
    })
  );
};
