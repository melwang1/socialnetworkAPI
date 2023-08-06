const { Thought} = require('../models');

const thoughtController = {
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find()
            res.status(200).json(user)
        } catch (err) {
            console.log(err)
        }
    },


    //GET all Thoughts

    async getThoughtsById(req, res) {
        try {
            const getThoughtsById = await Thought.findOne({ _id: req.params.thoughtId });
            if (!getThoughtsById) {
                return res.status(404).json({ message: 'No user with that thought' });
            }

            res.status(200).json(thought)
        } catch (err) {
            console.log(err)
        }
    },


    //UPDATE a Thought
    async updateThought(req, res) {
        try {
            const update = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            if (!update) {
                return res.status(404).json({ message: 'No thought was updated' });
            }
            res.json(update);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // CREATE a Thought
    async createThought(req, res) {
        try {
            const createThought = await Thought.create(req.body);
            res.status(200).json(createThought)
        } catch (err) {
            console.log(err)
        }
    },

    // Delete a Thought Id
    async deleteThoughtById(req, res) {
        try {
            const deleteThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!deleteThought) {
                return res.status(404).json({ message: 'No Thought with that ID' });
            }
            res.status(200).json({ message: 'Thought Sucessfully deleted' })
        } catch (err) {
            console.error(err)
        }
    },

    //ADD a Reaction
    async addReaction(req, res) {
        try {
            const addReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions:req.body }},
                { new: true }
            )
            res.status(200).json(addReaction)
        } catch (err) {
            console.error(err)
        }
    },

    //DELETE a Reaction
    async deleteReaction(req, res) {
        try {
            const deleteReaction = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId },
                { $pull: { reactions: {reactionId:req.params.reactionId } }},
                { new: true }
            );
            if (!deleteReaction) {
                return res.status(404).json({ message: "Can't find this reaction" });
            }
            res.status(200).json({ message: 'Reaction successfully deleted' });
        } catch (err) {
            console.error(err);
        }
    },
}
    module.exports = thoughtController;