import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
  {
    dp:String,
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    teacherId:{
        type:String,
        required:true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
    },
    instituteName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: true,
      trim: true,
    },
    refreshToken: {
      type: String,
    },
    permission: {
      type: Boolean,
      default: false,
    },
    allowedStudents:[{
        type:Schema.Types.ObjectId,
        ref:"Student"
    }],
    assignments:[{
      type:Schema.Types.ObjectId,
      ref:"Assignment"
    }]
},
  {
    timestamps: true,
  }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
