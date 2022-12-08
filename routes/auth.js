import express from "express";
import {
  userLogin,
  userRegister,
  userLogout,
  deleteAlluser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", userLogout);
router.delete("/deleteusers/:id", deleteAlluser);

export default router;
