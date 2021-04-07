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

const Operator = sequelize.define('Operators', {
    email: {
        type: Sequelize.STRING(100)
    },
    password: {
        type: Sequelize.STRING(20)
    }
})

//Operator.sync({force: true}) Used at 07/04/2021

/*Operator.create({
    email: "operator@operator.com",
    password: "mypass123"
})*/ //Acima foi um teste que fiz

const Resident = sequelize.define('residents', {

    name: {
        type: Sequelize.STRING(100)
    },
    bdate: {
        type: Sequelize.INTEGER(20)
    },
    telephone: {
        type: Sequelize.STRING(20)
    },
    cpf: {
        type: Sequelize.STRING(50)
    },
    email: {
        type: Sequelize.STRING(50)
    },

})

//Resident.sync({force: true}) Used at 07/04/2021

const Apartment = sequelize.define('apartments', {
    block: {
        type: Sequelize.INTEGER(10)
    },
    apartment: {
        type: Sequelize.INTEGER(10)
    },
})

//Apartment.sync({force: true}) Used at 07/04/2021


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}