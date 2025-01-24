import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  mail: {
    type: String,
    require: true,
    unique: true,
  },
  hash_password: {
    type: String,
    require: true,
  }
});

const User = mongoose.model('users', UserSchema)

export default User