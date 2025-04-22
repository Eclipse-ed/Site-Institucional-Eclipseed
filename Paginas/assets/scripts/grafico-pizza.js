const graficoPizza = document.getElementById('grafico-pizza').getContext('2d');
  const meuGrafico = new Chart(graficoPizza, {
    type: 'pie',
    data: {
      labels: ['Estável', 'Inativo', 'Em Alerta'],
      datasets: [{
        label: 'Tempo',
        data: [1800, 110, 320],
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'left',
          labels: {
            font: { size: 18 },
          },
        },
        title: {
          display: true,
          text: 'Tempo em horas de funcionamento do sensor',
          font: { size: 15 },
          padding: { bottom: 30 }
        }
      },
      responsive: false,
      maintainAspectRatio: true
    }
  });