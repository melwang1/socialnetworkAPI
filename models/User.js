const { Schema, model, Types } = require('mongoose');
const Thought = require ('./Thought');

const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: [true, 'Email address must be valid'],
        unique: true,
        validate: {
            validator: function (v){
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v)
        }
                  }
      },
      thoughts: [{
          type: Schema.Types.ObjectId,
          ref: 'thoughts'
      }],
      friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user' 
      }],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id:false
      }
)

userSchema.virtual('friendCount').get(function(){
        return this.friends.length
    })

const User = model('user', userSchema);

module.exports = User;