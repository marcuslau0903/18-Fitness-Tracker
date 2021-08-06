const { Router } = require("express");

const {
  getRange,
  getLastWorkout,
  createWorkout,
  updateWorkout,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts/range", getRange);
router.get("/workouts", getLastWorkout);
router.post("/workouts", createWorkout);
router.put("/workouts/:id", updateWorkout);

module.exports = router;
