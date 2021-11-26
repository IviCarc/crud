const {Router} = require('express');
const router = Router();

const { getUsers } = require('../controllers/users_controllers');

router.route("/")
    .get(getUsers)

module.exports = router;