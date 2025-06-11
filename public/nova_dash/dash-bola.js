console.log('iniciando plotagem do gráfico...');

            let labels = ['Sensores Ativos', 'Sensores Inativos'];
            let dados = {
                labels: labels,
                datasets: [{
                    label: 'Status Sensores',
                    data: [24, 1],
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
        

