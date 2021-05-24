const express = require("express");
const router = express.Router();

router.get("/demo", (req, res) => {
  res.send("Hello test");
});

module.exports = router;
