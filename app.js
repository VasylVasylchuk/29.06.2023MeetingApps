const userRouter = require("./routes/UserRoutes");
const express = require("express");
const app = express();

//middleware
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use("/api/users", userRouter);

app.use("/", (req, res)=> {
  res.send('Hello Hillel!')
});

module.exports = app;
