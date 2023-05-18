const express = require("express");
const router = express.Router();
const turtle_controller = require("../controllers/TurtleController")
router.get('/',turtle_controller.getAll);
router.get('/:id',turtle_controller.getByID);
router.get('/?favoritePizza',turtle_controller.getByPizza);
router.post('/',turtle_controller.createTurtle);
router.put('/',turtle_controller.updateTurtle);
router.put('/favoritePizzaBind',turtle_controller.favoritePizzaBind);
router.put('/secondFavoritePizzaBind',turtle_controller.secondFavoritePizzaBind);
router.put('/weaponBind',turtle_controller.weaponBind);
router.delete('/favoritePizzaUnbind',turtle_controller.favoritePizzaUnbind);
router.delete('/secondFavoritePizzaUnbind',turtle_controller.secondFavoritePizzaUnbind);
router.delete('/weaponUnbind',turtle_controller.weaponUnbind);
router.delete('/',turtle_controller.deleteTurtle);
module.exports = router