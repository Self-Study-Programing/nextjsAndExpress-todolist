import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  email: { type: String, required: true, trin: true, unique: true },
  password: { type: String, required: true, trim: true },
  item: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      date: {
        type: Date,
      },
      success: {
        type: Boolean,
      },
    },
  ],
});

const userModel = mongoose.model("User", UserSchema);
export default userModel;
