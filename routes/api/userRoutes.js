const router = require('express').Router();
const {
  getUsers,
  userById,
  createUser,
  updateById,
  deleteById,
} = require('../../controllers/userRoutes.js');

// /api/courses
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(userById)
  .put(updateById)
  .delete(deleteById);

module.exports = router;