const { Workout } = require("../../models");

const getRange = async (req, res) => {
  try {
    const workoutDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ day: -1 })
      .limit(7);

    return res.status(200).json(workoutDuration);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to get workouts" });
  }
};

const getLastWorkout = async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    return res.status(200).json(workouts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get workouts" });
  }
};

const createWorkout = (req, res) => {};

const updateWorkout = (req, res) => {};

module.exports = {
  getRange,
  getLastWorkout,
  createWorkout,
  updateWorkout,
};
