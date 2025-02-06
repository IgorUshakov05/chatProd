import mongoose, { Schema } from "mongoose";
import {v4} from 'uuid'
const UserSchema = new Schema({
  id: { type: String, unique: true, default: () => v4() },
  mail: {
    type: String,
    require: true,
    unique: true,
  },
  hash_password: {
    type: String,
    require: true,
  },
  chatList: [{ id: String }],
});

const User = mongoose.model("users", UserSchema);

export default User;
