import {Router} from "express"
import {verifyJWT} from "../middleware/auth.middleware.js"
import { loginUser, logoutUser, registerTeacher,findTeacherByUsername } from "../controllers/teacher.controllers.js"

import multer from 'multer';
import {storage} from "../cloudConfig.js";
import { v2 as cloudinary } from 'cloudinary';
const upload = multer({ storage });

const router = Router()
router.route("/register").post(upload.single('teacherImg'),registerTeacher)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,  logoutUser)

router.route("/getOneTeacher/:userName").get(findTeacherByUsername);

export default router