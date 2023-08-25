const express = require("express");
const app = express();
const { connection } = require("./db");
const cors = require("cors");
const { postRouter } = require("./routes/postRoutes");
const { userRouter } = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter)
app.listen(5000, async () => {
    try {
        await connection;
    } catch (error) {
        console.log(error);
    }
});