import User from "../model/User";

const router = require("express").Router();

router.get("/login", async (req, res) => {
  console.log(req.query);
  const { email, password } = req.query;
  try {
    const data = await User.find({ email, password });
    console.log(data);
    if (data) {
      res.send(JSON.stringify(data));
    } else {
      res.send("s");
    }
  } catch (e) {
    console.log(e);
    res.send("dd");
  }
  //console.log(JSON.stringify(req.query));
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
      item: [
        {
          title: "첫 투두",
          description: "first",
          date: "2022-4-29",
          success: false,
        },
      ],
    });
    user.save().then((res) => {
      console.log("성공");
    });

    res.send("This is register page");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
