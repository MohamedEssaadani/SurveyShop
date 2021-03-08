import express from "express"
import {
  authUser,
  getProfile,
  createUser,
} from "../controllers/userController.js"
import { protectRoutes } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(createUser)

router.post("/login", authUser)

router.route("/profile").get(protectRoutes, getProfile)

export default router
