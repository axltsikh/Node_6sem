module.exports = function(sequelize,DataTypes){
    return sequelize.define("Weapon",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dps:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    },{
        timestamps:false
    })
}
