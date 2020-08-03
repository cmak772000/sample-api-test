var usersController = require('../../controllers/usersController')

const res = {}
res.status = jest.fn().mockReturnValue(res)
res.send = jest.fn().mockReturnValue(res)

describe('userController', function () {

    test('getting all users', () => {
        usersController.getAll({}, res)
        expect(res.send).toHaveBeenCalledWith([{ "id": 0, "name": "Peter" }])
    });

    test('getting a user', () => {
        let req = {
            params: {
                id: 0
            }
        }
        usersController.getUser(req, res)
        expect(res.send).toHaveBeenCalledWith({ "id": 0, "name": "Peter" })
    });

    test('adding a user', () => {
        let req = {
            body: {
                name: 'John'
            }
        }
        usersController.addUser(req, res)
        expect(res.send).toHaveBeenCalledWith({ "id": 1, "name": "John" })
    });

    test('updating a user', () => {
        let req = {
            body: {
                name: 'Bob',
                id: 0
            }
        }
        usersController.updateUser(req, res)
        expect(res.send).toHaveBeenCalledWith({ "id": 0, "name": "Bob" })
    });

    test('deleting a user', () => {
        let req = {
            body: {
                id: 0
            }
        }
        usersController.deleteUser(req, res)
        expect(res.send).toHaveBeenCalledWith({ "message": "Deleted user id: 0" })
    });

    test('deleting an invalid user', () => {
        let req = {
            body: {
                id: 5
            }
        }
        usersController.deleteUser(req, res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.send).toHaveBeenCalledWith({"error": "Unknown user id: 5"})
    });
})