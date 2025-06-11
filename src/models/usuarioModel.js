var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
        SELECT idFuncionario, usuario, email, senha FROM funcionario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarEmpresa(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
        SELECT idEmpresa, razaoSocial, senha FROM empresa WHERE razaoSocial = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(usuario, senha, email, telefone, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO funcionario (usuario, senha, email, telefone, fkEmpresa) VALUES ('${usuario}', '${senha}', '${email}', '${telefone}', '${fkEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarEmpresa(razaoSocial, senha, cnpj, cep, estado, cidade, bairro, rua, logradouro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO empresa (razaoSocial, senha, cnpj, cep, estado, cidade, bairro, rua, logradouro) VALUES ('${razaoSocial}', '${senha}', '${cnpj}', '${cep}', '${estado}', '${cidade}', '${bairro}', '${rua}', '${logradouro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarFuncionarios(idEmpresa) {
    console.log("PASSEI AQUI!");

    var instrucaoSql = `
        SELECT codigoAtivacao, razaoSocial, idFuncionario AS idFuncionario, usuario AS nomeFuncionario, email AS emailFuncionario FROM funcionario 
        JOIN empresa ON funcionario.fkEmpresa = empresa.idEmpresa WHERE empresa.idEmpresa = ${idEmpresa};
    `;
    console.log('Executando a instrução SQL \n' + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    autenticar,
    autenticarEmpresa,
    cadastrar,
    cadastrarEmpresa,
    listarFuncionarios
};