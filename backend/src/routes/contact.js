import express from "express";
import {
  submitContact,
  getContacts,
  deleteContact,
} from "../controllers/contactController.js";
import { authenticateToken } from "../middleware/auth.js";
import { validateContact } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validateContact, submitContact);
router.get("/", authenticateToken, getContacts);
router.delete("/:id", authenticateToken, deleteContact);

export default router;
