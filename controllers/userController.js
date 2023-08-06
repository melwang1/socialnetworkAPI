const { User } = require('../models');

const userController = {
    async getUsers(req, res) {
        try {
            const user = await User.find()
            res.status(200).json(user)
        } catch (err) {
            console.log(err)
        }
    },


    //GET User by ID

    async userById(req, res) {
        try {
            const getUserId = await User.findOne({ _id: req.params.userId });
            if (!getUserId) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.status(200).json(user)
        } catch (err) {
            console.log(err)
        }
    },


    //UPDATE a User
    async updateUser(req, res) {
        try {
            const update = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            if (!update) {
                return res.status(404).json({ message: 'No user was updated' });
            }
            res.json(update);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // CREATE a User
    async createUser(req, res) {
        try {
            const createPost = await User.create(req.body);
            res.status(200).json(createPost)
        } catch (err) {
            console.log(err)
        }
    },

    // Delete a User Id
    async deleteUserById(req, res) {
        try {
            const User = await User.findOneAndDelete({ _id: req.params.userId });

            if (!deleteUser) {
                return res.status(404).json({ message: 'No User with that ID' });
            }
            res.status(200).json({ message: 'User Sucessfully deleted' })
        } catch (err) {
            console.error(err)
        }
    },

    //ADD a Friend
    async addFriend(req, res) {
        try {
            const addFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { friends: req.params.friendId } },
                { new: true }
            )
            res.status(200).json(addFriend)
        } catch (err) {
            console.error(err)
        }
    },

    //DELETE a Friend
    async deleteFriend(req, res) {
        try {
            const deleteFriend = await User.findOneAndDelete(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!deleteFriend) {
                return res.status(404).json({ message: "Can't find this user" });
            }
            res.status(200).json({ message: 'Friend successfully deleted' });
        } catch (err) {
            console.error(err);
        }
    },
}
    module.exports = userController;