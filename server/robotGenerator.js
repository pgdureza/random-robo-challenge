const faker = require('faker')

const STATUSES = ['on fire', 'rusty', 'loose screws', 'paint scratched']
const COLORS = ['red', 'blue', 'green', 'purple', 'pink']

let counter = 1

module.exports = () => {
  const data = []
  for (let i = 0; i < 10; i++) {
    const robot = {
      id: counter,
      name: `${faker.name.firstName()}-${counter}`,
      configuration: {
        hasSentience: faker.datatype.boolean(),
        hasWheels: faker.datatype.boolean(),
        hasTracks: faker.datatype.boolean(),
        numberOfRotors: faker.datatype.number(10),
        colour: COLORS[faker.datatype.number(COLORS.length - 1)],
      },
      statuses: [],
    }

    STATUSES.forEach((status) => {
      if (faker.datatype.boolean()) {
        robot.statuses.push(status)
      }
    })

    data.push(robot)
    counter++
  }
  return data
}
