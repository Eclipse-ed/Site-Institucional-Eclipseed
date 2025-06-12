function puxarDadosSensores(){
    fetch(`/dash/puxarDadosSensores`, {
        method: 'POST',
        cache: 'no-store'
    }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resultado) {
                    console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);
                    plotarGraficoBola(resultado)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
}
function puxarluminosidadeMedia(){
    fetch(`/dash/puxarluminosidadeMedia`, {
        method: 'POST',
        cache: 'no-store'
    }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resultado) {
                    console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);
                    exibirMediaKpi(resultado)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
}

function puxarMaiorLuminosidade(){
    fetch(`/dash/puxarMaiorLuminosidade`, {
        method: 'POST',
        cache: 'no-store'
    }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resultado) {
                    console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);
                    exibirMaiorKpi(resultado)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
}

function puxarMenorLuminosidade(){
    fetch(`/dash/puxarMenorLuminosidade`, {
        method: 'POST',
        cache: 'no-store'
    }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resultado) {
                    console.log(`Dados recebidos: ${JSON.stringify(resultado)}`);
                    exibirMenorKpi(resultado)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
}
puxarDadosSensores()
puxarMaiorLuminosidade()
puxarluminosidadeMedia()
puxarMenorLuminosidade()

function exibirMenorKpi(resultado){
    var kpi = document.getElementById('menorKpi')
    var dado = resultado[0].menorlux
    if (dado <= 10000 || dado >= 20000){
        document.getElementById('media').style.backgroundColor = rgb(255, 145, 145, 0.9)
    }else if (dado <= 13000 || dado >= 17000){
        document.getElementById('media').style.backgroundColor = rgb(244, 255, 93, 0.9);
    }else{
        document.getElementById('media').style.backgroundColor = rgb(148, 255, 102, 0.9);
    }
    kpi.innerHTML = `${dado} Lux`
}
function exibirMaiorKpi(resultado){
    var kpi = document.getElementById('maiorKpi')

    kpi.innerHTML = `${resultado[0].maiorlux} Lux`
}

function exibirMediaKpi(resultado){
    var kpi = document.getElementById('mediaKpi')

    kpi.innerHTML = `${resultado[0].medialux} Lux`
}

function plotarGraficoBola(resultado){
console.log('iniciando plotagem do gráfico...');

            let labels = ['Sensores Ativos', 'Sensores Inativos'];
            let dados = {
                labels: labels,
                datasets: [{
                    label: 'Status Sensores',
                    data: [resultado[0].sensores_ativos, resultado[0].sensores_inativos],
                    backgroundColor: [
                        'rgba(360, 360, 360, 0.6)',
                        'rgba(255, 0, 0, 0.6)'
                    ],
                    borderColor: [
                        'rgba(1, 1, 1, 0.6)',
                        'rgb(1, 1, 1, 0.6)'
                    ],
                    borderWidth: 2
                }]
            };

            console.log('Dados para o gráfico:', dados);

            const config = {
                type: 'pie',
                data: dados,
                options: {
                    responsive: false,
                }
    }
            const cof = document.getElementById('graficoPizza').getContext('2d');
            if (window.myChart) {
                window.myChart.destroy();
            }
            window.myChart = new Chart(cof, config);
        

}