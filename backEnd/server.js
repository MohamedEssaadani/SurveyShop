import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
dotenv.config()

connectDb()

const app = express()

app.get("/", (req, res) => {
  res.send("API is running...")
})

//For each request has url start with /api/products then use productRoutes for it
app.use("/api/products", productRoutes)

//404 Error, if the url not found
app.use(notFound)

//Error Handling
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on Port ${PORT}..`)
)
