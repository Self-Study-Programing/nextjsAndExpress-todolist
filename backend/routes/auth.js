import User from "../model/User";

const router = require("express").Router();

router.get("/login", (req, res) => {
  console.log(req.query);
  //console.log(JSON.stringify(req.query));
  res.send("This is login page");
});
router.get("/logout", (req, res) => {
  console.log(req.query);
  res.send("This is logout page");
});
router.get("/register", async (req, res) => {
  console.log(req.query);
  const { username, email, password } = req.query;
  try {
    const user = await new User({
      username,
      email,
      password,
      description: "개발자 싫어",
    });
    user.save().then((rs) => {
      console.log("성공");
    });

    res.send("This is register page");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
