const ctx = document.getElementById('graficoLuminosidade').getContext('2d');

const dadosDiarios = {
  labels: ['1:00', '3:00', '5:00', '7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00'],
  datasets: [
    {
      label: 'Setor A',
      data: [0, 0, 0, 30000, 70000, 80000, 78000, 75000, 30000, 0, 0, 0],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Setor B',
      data: [0, 0, 0, 25000, 72000, 76000, 77000, 74000, 28000, 0, 0, 0],
      borderColor: 'rgba(54,162,235,1)',
      backgroundColor: 'rgba(54,162,235,0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Setor C',
      data: [0, 0, 0, 20000, 85000, 90000, 87000, 82000, 31000, 0, 0, 0],
      borderColor: 'rgba(75, 192, 75, 1)',
      backgroundColor: 'rgba(75, 192, 75, 0.2)',
      fill: true,
      tension: 0.4,
    }
  ]
};

const dadosSemanais = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  datasets: [
    {
      label: 'Setor A',
      data: [65000, 70000, 68000, 75000, 73000, 71000, 69000],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Setor B',
      data: [60000, 62000, 64000, 66000, 68000, 70000, 69000],
      borderColor: 'rgba(54,162,235,1)',
      backgroundColor: 'rgba(54,162,235,0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Setor C',
      data: [70000, 73000, 71000, 76000, 74000, 72000, 75000],
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
        max: 100000
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

// Botões de troca
const btnDiario = document.getElementById('btnDiario');
const btnSemanal = document.getElementById('btnSemanal');

btnDiario.addEventListener('click', () => {
  btnDiario.classList.add('active');
  btnSemanal.classList.remove('active');
  grafico.data = dadosDiarios;
  grafico.update();
});

btnSemanal.addEventListener('click', () => {
  btnSemanal.classList.add('active');
  btnDiario.classList.remove('active');
  grafico.data = dadosSemanais;
  grafico.update();
});
