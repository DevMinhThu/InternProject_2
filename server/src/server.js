const express = require("express");
const config = require("config");
const router = require("./routers/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.use(router);

app.listen((port = config.get("app").port), () => {
  console.log("Server running on port " + port);
});
