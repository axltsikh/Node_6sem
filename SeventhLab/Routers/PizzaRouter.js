const express = require("express");
const router = express.Router();
const pizza_controller = require("../controllers/PizzaController")
router.get('/',pizza_controller.getAll);
router.get('/:id',pizza_controller.getByID);
router.get('/calories',pizza_controller.getByCalories);
router.post('/',pizza_controller.createPizza);
router.put('/',pizza_controller.updatePizza);
router.delete('/',pizza_controller.deletePizza);
router.get('/superfat/start',pizza_controller.superFat)
module.exports = router