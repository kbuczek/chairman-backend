const express = require("express");
const schedule_itemController = require("../controllers/schedule_itemController");

const router = express.Router();

router.get("/", schedule_itemController.all_items);

router.post("/add", schedule_itemController.add_post);

router.get("/add", schedule_itemController.add_get);

router.get("/:id", schedule_itemController.single_item);

router.delete("/:id", schedule_itemController.delete_item);

router.post("/update/:id", schedule_itemController.update_item);

module.exports = router;
