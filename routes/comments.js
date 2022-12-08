import express from "express";
import {
  createComments,
  getComments,
} from "../controllers/commentsController.js";
const router = express.Router();

router.post("/", createComments);
router.get("/", getComments);

export default router;
