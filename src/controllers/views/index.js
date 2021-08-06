const path = require("path");

const renderExercise = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
};

const renderStats = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
};

const renderHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

module.exports = {
  renderExercise,
  renderStats,
  renderHome,
};
