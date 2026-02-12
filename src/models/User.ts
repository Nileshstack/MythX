import mongoose, { Schema, models, model } from "mongoose";

const formDataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,  
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
    college: {
      type: String,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    transactionid: {
      type: String,
      trim: true,
    },
    othercollege: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", formDataSchema);

export default User;
