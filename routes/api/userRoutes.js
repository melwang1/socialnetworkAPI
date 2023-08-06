const router = require('express').Router();
const {
  getAllUsers,
  userById,
  createUser,
  updateUser,
  deleteUserById,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
  .get(userById)
  .put(updateUser)
  .delete(deleteUserById);

  router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;