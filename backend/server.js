const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();
dotenv.config();
connectDB();
app.use(express.json());


//
app.get("/", (req, res) => {
  res.send("Api is   running");
});
// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });
// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   console.log(note);
//   res.send(note);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use(notFound);
app.use(errorHandler);   
const PORT = process.env.PORT || 2000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
