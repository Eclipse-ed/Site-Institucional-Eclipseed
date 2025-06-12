const ctx = document.getElementById('graficoLuminosidade').getContext('2d');

const dadosDiarios = {
  labels: ['09:45:00', '09:45:10', '09:45:50', '09:46:10', '09:46:50'],
  datasets: [
    {
      label: 'Sensor 1',
      data: [350, 400, 2000, 3000, 7000],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Sensor 2',
      data: [0, 0, 0, 0, 0],
      borderColor: 'rgba(54,162,235,1)',
      backgroundColor: 'rgba(54,162,235,0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Sensor 3',
      data: [0, 0, 0, 0, 0],
      borderColor: 'rgba(75, 192, 75, 1)',
      backgroundColor: 'rgba(75, 192, 75, 0.2)',
      fill: true,
      tension: 0.4,
    }
  ]
};

let grafico = new Chart(ctx, {
  type: 'line',
  data: dadosDiarios,
  options: {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: 'Lux (Nível de Luminosidade)',
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: 'Horário',
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monitoramento dos níveis de luminosidade por setor',
        font: {
          size: 16
        }
      }
    }
  }
});
