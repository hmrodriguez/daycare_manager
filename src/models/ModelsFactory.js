import factory from 'factoria'

factory.define('Event', faker => ({
  type: faker.random.arrayElement(['accident', 'achievement']),
  description: faker.lorem.paragraph(),
  created_at: faker.date.past()
}))

export default factory
