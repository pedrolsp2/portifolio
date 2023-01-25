const Sequelize = require('sequelize')
const sequelize = new Sequelize('toplay','root',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Sucesso")
}).cath(function(erro){
    console.log("Erro: " + erro)
})