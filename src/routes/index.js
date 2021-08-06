const { Router } = require("express");

const apiRouter = require("./api");
const viewRouter = require("./views");

const router = Router();

router.use("/api", apiRouter);
router.use("/", viewRouter);

module.exports = router;
