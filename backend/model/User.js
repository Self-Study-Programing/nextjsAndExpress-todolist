import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  email: { type: String, required: true, trin: true },
  password: { type: String, required: true, trim: true },
  item: [
    {
      content: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],
});

const userModel = mongoose.model("User", UserSchema);
export default userModel;
