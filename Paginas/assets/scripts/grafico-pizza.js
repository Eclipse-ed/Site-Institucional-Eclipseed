const ctx = document.getElementById('grafico-pizza').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Estável', 'Em Alerta', 'Inativo'],
        datasets: [{
            data: [85, 10, 5],
            backgroundColor: ['red', 'green', 'blue'],
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        plugins: {
          tooltip: {
            enabled: false
          },
            datalabels: {
                display: 'inside',
                formatter: (value, context) => {
                    const sum = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = (value / sum * 100).toFixed(1) + '%';
                    return percentage;
                },
                font: {
                  color: 'white',
                  weight: 'bold',
                  size: 14,
              },
            },
            tooltip: {
              enabled: false
            }
            
        },
    }
});