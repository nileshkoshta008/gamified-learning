const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = "secret123";
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({ username, password: hashed });
  await user.save();

  res.json({ message: "User created" });
});
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).send("Invalid password");

  const token = jwt.sign({ id: user._id }, SECRET);

  res.json({ token, user });
});

const express = require('express');
const router = express.Router();
const User = require('./models/User');

function updateGamification(user) {
  user.level = Math.floor(user.points / 100) + 1;

  if (user.points >= 100 && !user.badges.includes("Beginner")) {
    user.badges.push("Beginner");
  }

  if (user.points >= 500 && !user.badges.includes("Pro")) {
    user.badges.push("Pro");
  }

  return user;
}

// Add Points
router.post('/addPoints', async (req, res) => {
  const { username, points } = req.body;

  let user = await User.findOne({ username });

  if (!user) user = new User({ username });

  user.points += points;
  user = updateGamification(user);

  await user.save();
  res.json(user);
});

// Leaderboard
router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ points: -1 }).limit(10);
  res.json(users);
});

module.exports = router;