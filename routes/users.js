var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

//get all
router.get('/', (req, res) => {
	usersController.getAll(req, res)
})

//get user
router.get('/:id', (req, res) => {
    usersController.getUser(req, res)
})

//add user
router.post('/', function (req, res) {
    usersController.addUser(req, res)
})

//update user
router.put('/', function (req, res) {
    usersController.updateUser(req, res)
})

//delete user
router.delete('/', function (req, res) {
    usersController.deleteUser(req, res)
})

module.exports = router;
