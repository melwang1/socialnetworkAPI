const { User } = require('../models');

const userController = async getUsers (req, res) {
    try {
        const user = await userController.find()
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
},
    //GET User by ID

    async UserById(req, res) {
    try {
        const getUserId = await User.findOne({ _id: req.params.userId });
        if (!getUserId) {
            return res.status(404).josn({ message: 'No user with that ID' });
        }

        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
},

//UPDATE a User
async updateUser(req, res) {
    try {
        const update = await userController.findOneAndUpdate(
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
        const createPost = await userController.create(req.body);
        res.status(200).json(createPost)
    } catch (err) {
        console.log(err)
    }
},

    // Delete a User Id
    async deleteUser(req, res) {
    try {
        const User = await userController.findOneAndDelete({ _id: req.params.userId });

        if (!deleteUser) {
            return res.status(404).json({ message: 'No User with that ID' });
        }
        res.status(200).json({ message: 'User Sucessfully deleted' })
    } catch (err) {
        console.error(err)
    }
},

//ADD a Friend
async addFriend (req, res) {
    try {
        const addFriend = await userController.findOneAndUpdate(
            {_id: req.params.userId},
            {$push: {friends: req.params.friendId}},
            {new: true}
        )
        res.status(200).json(addFriend)
    } catch (err) {
        console.error(err)
    }
},
