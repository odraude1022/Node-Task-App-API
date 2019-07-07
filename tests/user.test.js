const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
  name: 'Mike',
  email: 'mike@example.com',
  password: 'pass123!'
}

beforeEach( async () => {
  await User.deleteMany()
  await new User(userOne).save()
})

test('Should sign up a new user', async () => {
  await request(app).post('/users').send({
    name: 'Eduardo',
    email: 'eduardo@example.com',
    password: 'Mypass777!'
  }).expect(201)
})
