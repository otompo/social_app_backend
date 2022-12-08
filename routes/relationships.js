import express from "express";
import {
  addRelationships,
  getRelationships,
  deleteRelationships,
} from "../controllers/relationshipsController.js";
const router = express.Router();

router.post("/", addRelationships);
router.get("/", getRelationships);
router.delete("/", deleteRelationships);

export default router;
