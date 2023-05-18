module.exports = function(sequelize,DataTypes){
    return sequelize.define("Pizza",{
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
        calories:{
            type: DataTypes.DOUBLE,
            allowNull:false
        }
    },{
        timestamps:false
    })
}