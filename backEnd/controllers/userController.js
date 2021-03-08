import User from "../models/user.js"
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

//@desc Authentication & token
//@route GET /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid Email or Password!")
  }
})

//@desc Create new user
//@route POST /api/users/
//@access Public
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  //check if user exists
  const isExist = await User.findOne({ email })

  //if user exist throw error
  if (isExist) {
    res.status(400)
    throw new Error("User already exists!")
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.email,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Invalid user informations!")
  }
})

//@desc Get user profile
//@route GET /api/users/profile
//@access Private
const getProfile = asyncHandler(async (req, res) => {
  if (req.user) {
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
    })
  } else {
    res.status(401)
    throw new Error("User not found!")
  }
})

export { authUser, getProfile, createUser }
