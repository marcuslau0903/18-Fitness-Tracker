const { Router } = require("express");
const path = require("path");

const router = Router();

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
