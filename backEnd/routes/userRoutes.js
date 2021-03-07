import express from "express"
import { authUser, getProfile } from "../controllers/userController.js"
import { protectRoutes } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/login", authUser)

router.route("/profile").get(protectRoutes, getProfile)

export default router
