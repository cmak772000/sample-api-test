var request = require('supertest')

const host = 'http://localhost:3000'

test('getting all users', function (done) {
	request(host).get('/users')
		.set('Accept', 'application/json')
		.expect(200, done)
});

test('getting a specific user', function (done) {
	request(host).get('/users/0')
		.set('Accept', 'application/json')
		.expect(200)
		.then(res => {
			expect(res.body.name).toBe('Peter')
			expect(res.body.id).toBe(0)
			done()
		})
});

test('adding a user', function (done) {
	request(host).post('/users')
		.set('Accept', 'application/json')
		.send({ name: 'John' })
		.expect(200)
		.then(res => {
			expect(res.body.name).toBe('John')
			let id = res.body.id
			expect(id).not.toBeNull()
			request(host).get('/users/' + id)
				.set('Accept', 'application/json')
				.expect(200)
				.then(res2 => {
					expect(res2.body.id).toBe(id)
					expect(res2.body.name).toBe('John')
					done()
				})
		})
});

test('deleting a user', function (done) {
	request(host).post('/users')
		.set('Accept', 'application/json')
		.send({ name: 'Ray' })
		.expect(200)
		.then(res => {
			expect(res.body.name).toBe('Ray')
			let id = res.body.id
			expect(id).not.toBeNull()
			request(host).delete('/users')
				.set('Accept', 'application/json')
				.send({ id: id })
				.expect(200)
				.then(res2 => {
					expect(res2.body.message).toBe('Deleted user id: ' + id)
					done()
				})
		})
});

test('updating a user', function (done) {
	request(host).post('/users')
		.set('Accept', 'application/json')
		.send({ name: 'George' })
		.expect(200)
		.then(res => {
			expect(res.body.name).toBe('George')
			let id = res.body.id
			expect(id).not.toBeNull()
			request(host).put('/users')
				.set('Accept', 'application/json')
				.send({ id: id, name: 'Mary' })
				.expect(200)
				.then(res2 => {
					expect(res2.body.id).toBe(id)
					expect(res2.body.name).toBe('Mary')
					done()
				})
		})
})