const router = require('express').Router();
const {
  getAllThoughtsById,
  getThoughts,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtRoutes.js');

router.route('/').get(getAllThoughtsById).post(createThought);
router.route('/:thoughtId').get(getThoughts).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions').post(updateThought);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;