//import section
const bcrypt = require("bcryptjs");
// const axios = require("axios");
const Admin = require("../models/user.models");
// const Category = require("../models/category.models");
// const Product = require("../models/product.models");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/laboratoireLait");
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose failed with", err);
});
async function initAdmin() {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("123456789", salt);
  const newAdmin = new Admin({
    firstName: "noura",
    lastName: "noura",
    role: "admin",
    email: "noura@gmail.com",
    isAdmin: true,
    password: hashedPassword,
  });

  await newAdmin.save();
}

try {
  const init = async () => {
    await initAdmin();
    // await initCategories();
    // await initProducts();
    console.log("Done!");
  };
  init();
} catch (err) {
  console.log(err);
}
