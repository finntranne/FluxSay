import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getAllContacts,
  getMessagesByUserid,
  sendMessage,
  getChatPartners,
} from "../controllers/message.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
const router = express.Router();

router.use(protectRoute);

router.get("/users", getAllContacts);
router.get("/conversations", getChatPartners);
router.get("/:id", getMessagesByUserid);
router.post("/:id", sendMessage);

export default router;
