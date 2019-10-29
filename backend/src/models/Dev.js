const { Schema, model } = require("mongoose");

const DevSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  bio: String,
  avatar: {
    type: String,
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId, // FK TO DEV TABLE
    ref: "Dev"
  }],
  dislikes: [{
    type: Schema.Types.ObjectId, // FK TO DEV TABLE
    ref: "Dev"
  }]
}, {
  timestamps: true // creaetedAt, updatedAt
});

module.exports = model("Dev", DevSchema);