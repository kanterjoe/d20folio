// Pull this from: 18-mongoose/19-Populate-Exercise
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // `name` must be unique and of type String
  username: {
    type: String,
    unique: true
  },
  password: { //Saved in plain-text, VERY bad security
    type: String,
  },
  characters: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Character model
      ref: "Character"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
