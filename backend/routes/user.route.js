const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { User, validate, validateLogin } = require("../models/user.model");
const express = require("express");
const router = express.Router();

// router.get("/:id", auth, async (req, res) => {
//   if (req.params.id != req.user._id) return res.status(401).send("Access denied. Not your user profile.");
//   const user = await User.findById(req.user._id).select("-password");
//   res.send(user);
// });

router.post("/", async (req, res) => {
  // validate the request body first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Email already registered.");

  user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  user.password = bcrypt.hashSync(user.password, 10);
  await user.save();
  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send({
    _id: user._id,
    name: user.name,
    email: user.email
  });
});


router.post("/login", async (req, res) => {
  // validate the request body first
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not found");

  correct_password = user.password

  console.log(correct_password)
  console.log(user.password)


  if (!bcrypt.compareSync(req.body.password, correct_password, 10)) return res.status(400).send("Wrong password");

  const token = user.generateAuthToken();

  res.header("x-auth-token", token).send({
    _id: user._id,
    name: user.name,
    email: user.email
  });

})
module.exports = router;