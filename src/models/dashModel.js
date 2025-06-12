var database = require("../database/config")

function puxarDadosSensores() {
    const instrucaoSql = `
SELECT 
	  p.idPlantacao as 'identificador_plantacao',
	  sum(s.statusSensor) as 'sensores_ativos',
      count(s.statusSensor) - sum(s.statusSensor) as 'sensores_inativos'
FROM
	 Plantacao p JOIN Sensor s
ON
   p.idPlantacao = s.fkPlantacao
WHERE p.idPlantacao = 1
group by p.nome;
	  
    `
    console.log(`A instruçãosql é ${instrucaoSql}`)
    return database.executar(instrucaoSql);
}

function puxarluminosidadeMedia() {
    const instrucaoSqls = `
SELECT
	   p.idPlantacao as 'identificadorPlantacao',
	   ROUND(AVG(r.lux)) AS 'medialux', 
	   day(r.dtHora) as 'dia'
FROM Plantacao p join Sensor s
on p.idPlantacao = s.fkPlantacao
JOIN Registro r 
on r.fkSensor = s.idSensor
where idPlantacao = 1
group by p.idPlantacao, day(r.dtHora) ORDER BY day(r.dtHora) DESC LIMIT 1;
    `
    console.log(`A instrução é ${instrucaoSqls}`)
    return database.executar(instrucaoSqls)
}

function puxarMaiorLuminosidade() {
    const instrucaoSql = `
    SELECT
	   p.idPlantacao as 'identificadorPlantacao',
	   MAX(r.lux) AS 'maiorlux', 
	   day(r.dtHora) as 'dia'
FROM Plantacao p join Sensor s
on p.idPlantacao = s.fkPlantacao
JOIN Registro r 
on r.fkSensor = s.idSensor
where idPlantacao = 1
group by p.idPlantacao, day(r.dtHora) ORDER BY day(r.dtHora) DESC LIMIT 1;
    `
    console.log(`A instrução é ${instrucaoSql}`)
    return database.executar(instrucaoSql)
}

function puxarMenorLuminosidade() {
    const instrucaoSql = `
SELECT
	   p.idPlantacao as 'identificadorPlantacao',
	   MIN(r.lux) AS 'menorlux', 
	   day(r.dtHora) as 'dia'
FROM Plantacao p join Sensor s
on p.idPlantacao = s.fkPlantacao
JOIN Registro r 
on r.fkSensor = s.idSensor
where idPlantacao = 1
group by p.idPlantacao, day(r.dtHora) ORDER BY day(r.dtHora) DESC LIMIT 1;
    `
    console.log(`A instrução é ${instrucaoSql}`)
    return database.executar(instrucaoSql)
}

function ultimasMedidas() {


    const instrucaoSql = `
SELECT idRegistro, lux AS lux, DATE_FORMAT(dtHora, '%H:%i:%s') AS dtHora FROM Registro ORDER BY dtHora DESC LIMIT 5;  
    `
    console.log(`A instrução é ${instrucaoSql}`)
    return database.executar(instrucaoSql)
}

module.exports = {
    puxarDadosSensores,
    puxarluminosidadeMedia,
    puxarMaiorLuminosidade,
    puxarMenorLuminosidade,
    ultimasMedidas
}