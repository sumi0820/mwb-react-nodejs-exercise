const mongoose = require("mongoose");
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/malwarebytes'

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
