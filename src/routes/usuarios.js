var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/autenticarEmpresa", function (req, res) {
    usuarioController.autenticarEmpresa(req, res);
});

router.get("/listarFuncionarios/:id", function (req, res) { 
    usuarioController.listarFuncionarios(req, res);
})

module.exports = router;