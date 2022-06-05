const express = require("express");
const details = require("./details");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const designRoutes = require("./routes/designRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware")

const app = express();
dotenv.config();
connectDB();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Api is running.....");
} );

app.get("/api/details", (req, res) => {
    res.json(details)
})

app.use("/api/users", userRoutes)
app.use("/api/designs", designRoutes)

app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000

 
app.listen(PORT, console.log("Server started on PORT 5000"));