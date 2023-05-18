const Sequelize = require("sequelize");
const sequelize = new Sequelize("sevenLab", "axl", "12345678", {
  dialect: "mssql",
  host: "localhost",
  port: "1433",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
const DataTypes = require("sequelize").DataTypes;
const _Turtle = require("./Turtle");
const _Weapon = require("./Weapon");
const _Pizza = require("./Pizza");
// let turtle = _Turtle(sequelize,DataTypes)
//   let weapon = _Weapon(sequelize,DataTypes)
//   let pizza = _Pizza(sequelize,DataTypes)
//   turtle.belongsTo(weapon,{as:'weaponID_WeaponID',foreignKey: "WeaponID"})
//   weapon.hasMany(turtle,{as: 'Turtle_Weapon',foreignKey:"WeaponID"})

//   turtle.belongsTo(pizza,{as:'favouritePizzaID_FavouritePizzaID',foreignKey: {allowNull: true, name: 'firstPizza' }})
//   pizza.hasMany(turtle,{as: 'Turtle_FirstPizza',foreignKey:{allowNull: true, name: 'firstPizza' }})

//   turtle.belongsTo(pizza,{as:'secondFavouritePizzaID_SecondFavouritePizzaID',foreignKey: {allowNull: true, name: 'secondPizza' }})
//   pizza.hasMany(turtle,{as: 'Turtle_SecondPizza',foreignKey:{allowNull: true, name: 'secondPizza' }})
// weapon.sync({force: false}).then(() => {
//   weapon.create({name:'Sais',dps:150});
//   weapon.create({name:'Sword',dps:150});
//   weapon.create({name:'Bo Staff',dps:150});
//   weapon.create({name:'Nunchucks',dps:150})
//   pizza.sync({force: false}).then(() => {
//       pizza.create({name:'Supreme Pizza',calories: 1500});
//       pizza.create({name:'Salami Pizza',calories: 2000});
//       pizza.create({name:'Margherita Pizza',calories: 700});
//       pizza.create({name:'Pepperoni Pizza',calories: 1600});
//       pizza.create({name:'Taco Pizza',calories: 1500});
//       pizza.create({name:'Shrimp Pizza',calories: 1700});
//       turtle.sync({force: false}).then(() => {
//           turtle.create({name:"Leonardo",color:"Blue",image:"asd",WeaponID:2,firstPizza:2,secondPizza:3})
//           turtle.create({name:"Raphael",color:"Red",image:"asd",WeaponID:1,firstPizza:5,secondPizza:1})
//           turtle.create({name:"Donatello",color:"Purple",image:"asd",WeaponID:3,firstPizza:4,secondPizza:3})
//           turtle.create({name:"Michelangelo",color:"Orange",image:"asd",WeaponID:4,firstPizza:4,secondPizza:2})
//       });
//   });
// });

module.exports.ORM = function initModels(){
  let turtle = _Turtle(sequelize,DataTypes)
  let weapon = _Weapon(sequelize,DataTypes)
  let pizza = _Pizza(sequelize,DataTypes)
  turtle.belongsTo(weapon,{as:'weaponID_WeaponID',foreignKey: "WeaponID"})
  weapon.hasMany(turtle,{as: 'Turtle_Weapon',foreignKey:"WeaponID"})

  turtle.belongsTo(pizza,{as:'favouritePizzaID_FavouritePizzaID',foreignKey: {allowNull: true, name: 'firstPizza' }})
  pizza.hasMany(turtle,{as: 'Turtle_FirstPizza',foreignKey:{allowNull: true, name: 'firstPizza' }})

  turtle.belongsTo(pizza,{as:'secondFavouritePizzaID_SecondFavouritePizzaID',foreignKey: {allowNull: true, name: 'secondPizza' }})
  pizza.hasMany(turtle,{as: 'Turtle_SecondPizza',foreignKey:{allowNull: true, name: 'secondPizza' }})
  return {
    turtle,
    weapon,
    pizza,
    sequelize
}
}



