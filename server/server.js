require("dotenv").config();
require("./config/database");

const express = require("express");
const app = express();
const PORT = 8080;

const bodyParser = require("body-parser");

const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

// Routes
const itemRoutes = require("./src/routes/item.routes");
app.use("/api", itemRoutes);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// will redirect all the non-api routes to react frontend
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
