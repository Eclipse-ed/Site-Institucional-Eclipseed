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
	idEmpresa int auto_increment,
    razaoSocial varchar(45),
    senha varchar(45),
    cnpj char(18),
    fkEnderecoEmpresa INT,
    codigoAtivacao VARCHAR(45),
    CONSTRAINT pkComposta PRIMARY KEY(idEmpresa, fkEnderecoEmpresa),
    CONSTRAINT fk_Empresa_Endereco1 
        FOREIGN KEY (fkEnderecoEmpresa)
            REFERENCES endereco(idEndereco)
);

CREATE TABLE endereco (
  idEndereco INT PRIMARY KEY auto_increment,
  cep CHAR(9) NOT NULL,
  estado CHAR(2) NOT NULL,
  cidade VARCHAR(45) NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  rua VARCHAR(45) NOT NULL,
  numeroLogradouro CHAR(5) NOT NULL,
  complemento VARCHAR(45)
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

SELECT * FROM empresa;
UPDATE empresa SET codigoAtivacao = 'AX1221' WHERE idEmpresa = 1;

-- Tabela Plantacao
CREATE TABLE Plantacao (
  idPlantacao INT,
  nome VARCHAR(45) NOT NULL,
  quantHectareAtivo INT NOT NULL,
  fkEnderecoPlant INT,
  fkEmpresaPlant INT,
  fkEnderecoEmpresaPlant INT,
  CONSTRAINT pkComposta3 PRIMARY KEY (idPlantacao, fkEnderecoPlant, fkEmpresaPlant, fkEnderecoEmpresaPlant),
  CONSTRAINT fk_Plantacao_CepCadastro1 
    FOREIGN KEY (fkEnderecoPlant)
    REFERENCES endereco(idEndereco),
  CONSTRAINT fk_Plantacao_Empresa1 
    FOREIGN KEY (fkEmpresaPlant, fkEnderecoEmpresaPlant)
    REFERENCES empresa(idEmpresa, fkEnderecoEmpresa)
);

INSERT INTO Plantacao VALUES
(1, 'Plantação Sul', 20, 1, 1, 1);

-- Tabela Sensor
CREATE TABLE Sensor (
  idSensor INT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
    statusSensor tinyint,
  fkPlantacao INT,
  fkEndPlantSensor INT,
  CONSTRAINT fk_Sensor_Plantacao1 
    FOREIGN KEY (fkPlantacao, fkEndPlantSensor)
    REFERENCES Plantacao(idPlantacao, fkEnderecoPlant)
);

INSERT INTO Sensor VALUES
(1, 'Sensor de Luminosidade','0', 1, 1),
(2 , 'Sensor de Luminosidade','0', 1, 1),
(3 , 'Sensor de Luminosidade','0', 1, 1),
(4 , 'Sensor de Luminosidade','0', 1, 1),
(5 , 'Sensor de Luminosidade','0', 1, 1),
(6 , 'Sensor de Luminosidade','0', 1, 1),
(7 , 'Sensor de Luminosidade','0', 1, 1),
(8 , 'Sensor de Luminosidade','0', 1, 1),
(9 , 'Sensor de Luminosidade','0', 1, 1),
(10 , 'Sensor de Luminosidade','0', 1, 1),
(11 , 'Sensor de Luminosidade','0', 1, 1),
(12 , 'Sensor de Luminosidade','0', 1, 1),
(13 , 'Sensor de Luminosidade','0', 1, 1),
(14 , 'Sensor de Luminosidade','0', 1, 1),
(15 , 'Sensor de Luminosidade','0', 1, 1),
(16 , 'Sensor de Luminosidade','0', 1, 1),
(17 , 'Sensor de Luminosidade','0', 1, 1),
(18 , 'Sensor de Luminosidade','0', 1, 1),
(19 , 'Sensor de Luminosidade','0', 1, 1),
(20 , 'Sensor de Luminosidade','0', 1, 1),
(21 , 'Sensor de Luminosidade','0', 1, 1),
(22 , 'Sensor de Luminosidade','0', 1, 1),
(23 , 'Sensor de Luminosidade','0', 1, 1),
(24 , 'Sensor de Luminosidade','0', 1, 1);

-- Tabela Registro
CREATE TABLE Registro (
  idRegistro INT auto_increment,
  lux FLOAT NOT NULL,
  dtHora DATETIME default current_timestamp NOT NULL,
  fkSensor INT,
  CONSTRAINT pkComposta4 PRIMARY KEY (idRegistro, fkSensor),
  CONSTRAINT fk_DadosSensor_Sensor1 
    FOREIGN KEY (fkSensor)
    REFERENCES Sensor(idSensor)
);

INSERT INTO Registro VALUES
(1, 455.6, '2025-06-11 09:45:00', 1),
(2, 455.6, '2025-06-11 09:45:10', 1),
(3, 455.6, '2025-06-11 09:45:50', 1),
(4, 455.6, '2025-06-11 09:46:10', 2);



SELECT 
	
	   p.nome as nome_plantacao, 	
	   round(sum(r.lux),2) as soma_lux,
       date_format(r.dtHora, '%H:%i') as hora_minuto_registro
FROM
    plantacao p JOIN sensor s
    ON p.idPlantacao = s.fkPlantacao
JOIN registro r
	ON s.idSensor = r.fkSensor
GROUP BY p.nome, hora_minuto_registro;

insert into sensor values
(25, 'Sensor de Luminosidade','1', 1, 1);



SELECT 
	  p.idPlantacao as 'identificador_plantacao',
	  sum(s.statusSensor) as 'sensores_ativos',
      count(s.statusSensor) - sum(s.statusSensor) as 'sensores_inativos'
FROM
	 plantacao p JOIN sensor s
ON
   p.idPlantacao = s.fkPlantacao
WHERE p.idPlantacao = 1
group by p.nome;
	  


    
SELECT
	   p.idPlantacao as 'identificadorPlantacao',
	   MAX(r.lux) AS 'maiorlux', 
	   day(r.dtHora) as 'dia'
FROM plantacao p join sensor s
on p.idPlantacao = s.fkPlantacao
JOIN registro r 
on r.fkSensor = s.idSensor
where idPlantacao = 1
group by p.idPlantacao, day(r.dtHora);

SELECT
	   p.idPlantacao as 'identificadorPlantacao',
	   MIN(r.lux) AS 'menorlux', 
	   day(r.dtHora) as 'dia'
FROM plantacao p join sensor s
on p.idPlantacao = s.fkPlantacao
JOIN registro r 
on r.fkSensor = s.idSensor
where idPlantacao = 1
group by p.idPlantacao, day(r.dtHora);


SELECT
	   p.idPlantacao as 'identificadorPlantacao',
	   round(avg(r.lux),1) AS 'medialux', 
	   day(r.dtHora) as 'dia'
FROM plantacao p join sensor s
on p.idPlantacao = s.fkPlantacao
JOIN registro r 
on r.fkSensor = s.idSensor
where idPlantacao = 1
group by p.idPlantacao, day(r.dtHora);

-- INSERT DOS CODIGOS DE ATIVACAO 
UPDATE empresa SET codigoAtivacao = 'AX1221' WHERE idEmpresa = 1;		
    
-- SELECTS
SELECT * FROM empresa;	

SHOW TABLES;	