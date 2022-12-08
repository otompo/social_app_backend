import express from "express";
import {
  createPost,
  getPosts,
  deletePost,
} from "../controllers/postsController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.delete("/:id", deletePost);

export default router;
