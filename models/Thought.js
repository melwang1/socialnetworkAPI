const { Schema, model, Types } = require('mongoose');
const Reaction = require('./Reaction');
const dayjs = require('dayjs')

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        unique: true,
        minLength: 1,
        maxLength: 280
      },
      createdAt: {
        type: Date,
        default: new Date(),
        get:function (date) {
            return dayjs(date).format('YYYY-MMM-DD HH:mm:ss');
        }

      },
      username: {
        type: String,
        required: true
      },
      reactions: [reactions]
    },{
        toJSON:{
            virtuals:true,
            getters:true
        },
        id:false
    })

thoughtSchema.virtual('reactionCount').get(function(){
        return this.reactions.length
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
