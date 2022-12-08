import express from "express";
import { getUsers, updateUser } from "../controllers/usersController.js";
const router = express.Router();

router.get("/find/:userId", getUsers);
router.put("/", updateUser);

export default router;
