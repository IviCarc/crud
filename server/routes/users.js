const {Router} = require('express');
const router = Router();

const { getUsers, newUser, getUser, editUser, deleteUser } = require('../controllers/users_controllers');

router.route("/")
    .get(getUsers)
    .post(newUser)

router.route('/:id')
    .get(getUser)
    .put(editUser)
    .delete(deleteUser)

module.exports = router;