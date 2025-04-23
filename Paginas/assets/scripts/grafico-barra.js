const graficoBarra = document.getElementById('grafico-barra').getContext('2d');
new Chart(graficoBarra, {
    type: 'bar',
    data: {
        labels: ['Fevereiro', 'Março', 'Abril'],
        datasets: [{
            label: 'Lux médio de cada mês',
            data: [12650, 10710, 13624],
            backgroundColor: '#6A5ACD', 
            borderColor: '#6A5ACD',
            borderWidth: 1,
            fontColor: ["rgb (0, 0, 0)"]
        }]
    }
});