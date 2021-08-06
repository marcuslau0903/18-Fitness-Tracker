const { Router } = require("express");

const {
  renderExercise,
  renderStats,
  renderHome,
} = require("../../controllers/views");

const router = Router();

router.get("/exercise", renderExercise);

router.get("/stats", renderStats);

router.get("/", renderHome);

module.exports = router;
