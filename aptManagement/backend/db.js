const Sequelize = require('sequelize')

//Conexão com o banco de dados MySql
const sequelize = new Sequelize ('apt_management','root', 'Eduardo123!', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " +erro)
})
//Acima é para confirmar se conectou ou mostrar o erro caso ocorrer

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}