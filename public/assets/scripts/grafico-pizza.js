const ctx = document.getElementById('grafico-pizza').getContext('2d');

Chart.defaults.color = '#000';

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Estável', 'Em Alerta', 'Inativo'],
        datasets: [{
            data: [75, 20, 10],
            backgroundColor: ['red', 'green', 'blue'],
        }]
    },
    plugins: [ChartDataLabels], // ativa a biblioteca para colocar o valor dentro
    options: {
        plugins: {
            datalabels: {
                display: 'inside', // coloca o valor dentro
                formatter: (value, context) => {
                    const sum = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = (value / sum * 100).toFixed(1) + '%';
                    return percentage;
                }, //formatacao para porcentagem
                font: {
                  size: 24
              },
            }
            
        },
    }
});