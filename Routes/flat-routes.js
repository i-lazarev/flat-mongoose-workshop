const express = require("express");
const controller = require("../Controlers/flat-controlers");
const router = express.Router();

router.get("/", controller.home);
router.get("/flat/create", controller.create);
router.get("/flat/:id", controller.getOne);
router.get("/flat", controller.getAll);
router.post("flat", controller.createOne);
router.patch("/flat/:id", controller.updateFlat);
router.delete("/flat/:id", controller.deleteFlat);

module.exports = router;
