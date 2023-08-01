const router = require('express').Router();
const {
  getThoughtsById,
  findThoughts,
  createThought,
  deleteThought,
  updateThought,
  deleteThought,
  postThought
} = require('../../controllers/thoughtRoutes.js');

router.route('/').get(getThoughtsById).post(createThought);
router.route('/:thoughtId').get(getThoughtsById).delete(deleteThought).put(updateThought);
router.route('/:userId/new/:thoughtId').post(postThought);

router.route('/:thoughtId/reactions').post(updateThought);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteThought);

module.exports = router;