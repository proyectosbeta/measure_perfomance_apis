import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
