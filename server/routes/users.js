const {Router} = require('express');
const router = Router();

const { getUsers, newUser, editUser, deleteUser } = require('../controllers/users_controllers');

router.route("/")
    .get(getUsers)
    .post(newUser)

router.route('/:id')
    .put(editUser)
    .delete(deleteUser)

module.exports = router;