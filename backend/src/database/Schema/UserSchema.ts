import mongoose, { Schema, Document, Types } from "mongoose";
import { v4 } from "uuid";

interface IChat {
  id: string;
}

interface IUser extends Document {
  id: string;
  mail: string;
  hash_password: string;
  chatList: IChat[];
}
const UserSchema = new Schema<IUser>({
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
  chatList: [
    {
      id: { type: String, required: true },
    },
  ],
});

const User = mongoose.model("users", UserSchema);

export default User;
