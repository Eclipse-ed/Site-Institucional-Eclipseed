var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/puxarDadosSensores", function (req, res) {
    dashController.puxarDadosSensores(req, res);
});

router.post("/puxarluminosidadeMedia", function(req, res){
    dashController.puxarluminosidadeMedia(req,res)
})

router.post("/puxarMaiorLuminosidade", function(req,res){
    dashController.puxarMaiorLuminosidade(req,res)
})

router.post("/puxarMenorLuminosidade", function(req, res){
    dashController.puxarMenorLuminosidade(req,res)
})

router.get("/ultimasMedidas", function (req, res) { 
    dashController.ultimasMedidas(req, res);
})

router.get("/ultimaMedida", function (req, res) { 
    dashController.ultimaMedida(req, res);
})

module.exports = router;