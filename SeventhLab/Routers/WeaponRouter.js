const express = require("express");
const router = express.Router();
const weapon_controller = require("../controllers/WeaponController")
router.get('/',weapon_controller.getAll);
router.get('/:id',weapon_controller.getByID);
router.get('/dps',weapon_controller.getByDPS);
router.post('/',weapon_controller.createWeapon);
router.put('/',weapon_controller.updateWeapon);
router.delete('/',weapon_controller.deleteWeapon);
module.exports = router