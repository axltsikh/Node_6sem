module.exports = function(sequelize,DataTypes){
    return sequelize.define("Turtle",{
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
        color:{
            type: DataTypes.STRING,
            allowNull:false
        },
        image:{
            type: DataTypes.STRING,
            allowNull:true
        }
    },{
        timestamps:false
    })
}