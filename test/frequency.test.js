const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../app')

describe.only('GET /frequency endpoint', () => {
	it(`should return the correct frequency object for 'onomatopoeia'`, () => {
		const query = { s: 'onomatopoeia' }
		const expected = {
			count: 8,
			average: 1.5,
			highest: 'o',
			unique: 8,
			o: 4,
			n: 1,
			m: 1,
			a: 2,
			t: 1,
			p: 1,
			e: 1,
			i: 1
		}

		return supertest(app)
			.get('/frequency')
			.query(query)
			.expect(200)
			.expect('Content-Type', /json/)
			.then(res => {
				expect(res.body).to.eql(expected)
			})
	})
})
