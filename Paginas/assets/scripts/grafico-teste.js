var graficoLinha = new Chart(document.getElementById('grafico'), {
    type: 'line',
    data: {
        labels: ['01:00', '03:00', '05:00', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00'],
        datasets: [
            {
                label: 'Sensor 1',
                data: [250, 500, 1000, 4000, 7000, 10000, 9500, 7000, 4000, 1000, 500, 250],
                borderColor: 'rgba(0, 255, 0, 1)',
                backgroundColor: 'rgba(0, 0, 0, 0.15)',
                borderWidth: 2,
                fill: true,
                pointRadius: 0,
                tension: 0.3
            },
            {
                label: 'Sensor 2',
                data: [250, 400, 900, 2500, 6000, 8600, 9500, 7000, 4000, 1000, 500, 250],
                borderColor: 'rgba(255, 0, 0, 1)',
                backgroundColor: 'rgba(0, 0, 0, 0.15)',
                borderWidth: 2,
                fill: true,
                pointRadius: 0,
                tension: 0.3
            },
            {
                label: 'Sensor 3',
                data: [100, 640, 1100, 3850, 7200, 9800, 9500, 8100, 3000, 2000, 500, 100],
                borderColor: 'rgba(0, 0, 255, 1)',
                backgroundColor: 'rgba(0, 0, 0, 0.15)',
                borderWidth: 2,
                fill: true,
                pointRadius: 0,
                tension: 0.3
            },

        ]
    }
})