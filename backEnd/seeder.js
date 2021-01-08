import mongoose from "mongoose"
import dotenv from "dotenv"
import User from "./models/user.js"
import Product from "./models/product.js"
import Order from "./models/order.js"
import users from "./data/users.js"
import products from "./data/products.js"
import connectDb from "./config/db.js"

//to load .env file content into process.env
dotenv.config()

//connect to database
connectDb()

const importData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    await Order.deleteMany()

    //get created users
    const createdUsers = await User.insertMany(users)
    //get the id of the first user which is the admin
    const admin = createdUsers[0]._id
    //add user id which is the admin to all products
    const productsList = products.map((product) => {
      return {
        ...product,
        user: admin,
      }
    })

    await Product.insertMany(productsList)

    console.log("Data Imported!")
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    await Order.deleteMany()

    console.log("Data Destroyed!")
    process.exit()
  } catch (error) {
    console.log(`Error : ${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
