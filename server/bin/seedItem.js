const mongoose = require("mongoose");
const ItemModel = require("../models/Item.model");
require("../config/db.config");

ItemModel.insertMany([
  {
    id: 1,
    name: "Apple iPhone 11 Red",
    quantity: 12,
    price: 699,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam accusamus quia, veritatis sint corporis sequi asperiores totam rerum ea, nihil accusantium ab. Distinctio, deserunt. Atque, doloremque voluptatum? Veniam, accusamus.",
  },
  {
    id: 2,
    name: "Apple iPad Air Green",
    quantity: 51,
    price: 749,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam accusamus quia, veritatis sint corporis sequi asperiores totam rerum ea, nihil accusantium ab. Distinctio, deserunt. Atque, doloremque voluptatum? Veniam, accusamus.",
  },
  {
    id: 3,
    name: "Apple Mac mini",
    quantity: 100,
    price: 899,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam accusamus quia, veritatis sint corporis sequi asperiores totam rerum ea, nihil accusantium ab. Distinctio, deserunt. Atque, doloremque voluptatum? Veniam, accusamus.",
  },
  {
    id: 4,
    name: "Apple Apple Watch Series 6 Gold Aluminum Case with Solo Loop",
    quantity: 88,
    price: 429,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam accusamus quia, veritatis sint corporis sequi asperiores totam rerum ea, nihil accusantium ab. Distinctio, deserunt. Atque, doloremque voluptatum? Veniam, accusamus.",
  },
  {
    id: 5,
    name: "Apple AirPods Max",
    quantity: 0,
    price: 549,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam accusamus quia, veritatis sint corporis sequi asperiores totam rerum ea, nihil accusantium ab. Distinctio, deserunt. Atque, doloremque voluptatum? Veniam, accusamus.",
  },
])
  .then(() => {
    console.log("Data was added");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error happened", err);
  });
