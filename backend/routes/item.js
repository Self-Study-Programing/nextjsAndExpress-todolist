import User from "../model/User";

const router = require("express").Router();

router.get("/post", (req, res) => {
  console.log(req.query);
  res.send("sdf");
});

module.exports = router;
