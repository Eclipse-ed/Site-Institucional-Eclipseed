const MINIMO_DESEJADO = 10000;
const MAXIMO_DESEJADO = 15000;

var graficoLinhas = new Chart(document.getElementById('grafico-linha').getContext('2d'), {
    type: 'line',
    data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '12:30', '13:00', '14:00'], // valores no eixo X
    datasets: [
        // Dados mockados do sensor
        {
            label: 'Sensor',
            data: [10000, 12420, 13540, 13660, 14000, 14340, 15000, 14730, 13520, 9500],
            borderColor: 'rgba(0, 0, 0, 0.38)',
            backgroundColor: 'rgba(0, 0, 0, 0.38)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        },
        // Linha para o valor máximo
        {
            label: 'Máximo',
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgb(255, 0, 0)',
            borderWidth: 2,
            borderDash: [0, 0],
            pointRadius: 0,
            fill: false,
            data: Array(10).fill(MAXIMO_DESEJADO)
        },
        // Linha para o valor mínimo
        {
            label: 'Mínimo',
            borderColor: '#FFBB00',
            backgroundColor: '#FFBB00',
            borderWidth: 2,
            borderDash: [0, 0],
            pointRadius: 0,
            fill: false,
            data: Array(10).fill(MINIMO_DESEJADO)
        }
    ]}
});