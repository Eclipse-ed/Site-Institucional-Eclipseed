-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE eclipseed;

USE eclipseed;

-- CRIAÇÃO DAS TABELAS
CREATE TABLE empresa (
	idEmpresa int primary key auto_increment,
    razaoSocial varchar(45),
    senha varchar(45),
    cnpj char(18),
    cep char(9),
    estado char(2),
    cidade varchar(45),
    bairro varchar(45),
    rua varchar(45),
    logradouro char(3),
	codigoAtivacao varchar(45)
);

CREATE TABLE funcionario (
	idFuncionario int primary key auto_increment,
    usuario varchar(45),
    senha varchar(45),
    email varchar(45),
    telefone char(15),
    fkEmpresa int,
    constraint fkEmpresaFunc 
		foreign key (fkEmpresa) 
			references empresa(idEmpresa)
);

-- INSERT DOS CODIGOS DE ATIVACAO 
UPDATE empresa SET codigoAtivacao = '4002' WHERE idEmpresa = 1;		
    
-- SELECTS
SELECT * FROM empresa;		