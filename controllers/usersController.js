var users = [
	{
		id: 0,
		name: 'Peter'
	}
]
var id = 1

exports.getAll = (req, res) => {
	res.send(users)
}

exports.getUser = (req, res) => {
	let user_id = req.params.id
    if (user_id != null) {
        let userFound = false
        users.some(user => {
            if (user.id == user_id) {
                res.send(user)
                userFound = true
                return true
            }
        })
        if (!userFound) {
            res.status(400).send({
                error: 'Unknown user id: ' + user_id
            })
        }
    }
    else {
        res.status(400).send({
            error: 'Missing user id'
        })
    }
}

exports.addUser = (req, res) => {
	let name = req.body.name
    if (name != null) {
        let new_user = {
            id: id++,
            name: name
        }
        users.push(new_user)
        res.send(new_user)
    }
    else {
        res.status(400).send({
            error: 'Missing user name'
        });
    }
}

exports.updateUser = (req, res) => {
	let user_id = req.body.id
    let user_name = req.body.name
    if (user_id != null) {
        let userFound = false
        users.some(user => {
            if (user.id == user_id) {
                user.name = user_name
                userFound = true
                res.send(user)
                return true
            }
        })
        if (!userFound) {
            res.status(400).send({
                error: 'Unknown user id: ' + user_id
            })
        }
    }
    else {
        res.status(400).send({
            error: 'Missing user id'
        })
    }
}

exports.deleteUser = (req, res) => {
	let user_id = req.body.id
    if (user_id != null) {
        let delete_index = -1
        users.some((user, index) => {
            if (user.id == user_id) {
                delete_index = index
                return true
            }
        })
        if (delete_index >= 0) {
            users.splice(delete_index, 1)
            res.send({
                message: 'Deleted user id: ' + user_id
            })
        }
        else {
            res.status(400).send({
                error: 'Unknown user id: ' + user_id
            })
        }
    }
    else {
        res.status(400).send({
            error: 'Missing user id'
        })
    }
}