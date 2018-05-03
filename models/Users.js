var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `title` is required and of type String
    fullName: {
    type: String,
    required: true
  },
 

email:{
    type:String,
    require:true
},
password:{
    type:String,
    require
},
github:{
    type:String,
    require:true
},
image:{
    type:String,
    required:true
},
descript:{
  type:String,
  required:true
},
  userCreated: {
    type: Date,
    default: Date.now
  },
  mentoredUsers:{
    type:Schema.Types.ObjectId,
    ref:"Users",
    default:"Empty"
  },
  menteeUsers:{
    type:  Schema.Types.ObjectId,
    ref:"Users",
    default:"Empty"
  },
    
  // `resources` is an object that stores a Resources id
  // The ref property links the ObjectId to the Resources model
  // This allows us to populate the Developer with an associated Resources
  resources: {
    type: Schema.Types.ObjectId,
    ref: "Resources"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Users = mongoose.model("Users", UserSchema);

// Export the Article model
module.exports = Users;