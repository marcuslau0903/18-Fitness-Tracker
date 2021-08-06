const { Router } = require("express");

const viewRouter = require("./views");

const router = Router();

router.use("/", viewRouter);

module.exports = router;
