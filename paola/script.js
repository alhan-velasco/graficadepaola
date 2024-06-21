const ctx = document.getElementById('adoptionChart').getContext('2d');
const adoptionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: 'Número de Personas',
            data: [5, 5, 5, 20, 25, 30, 30, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Años'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Número de Personas'
                },
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Curva de Adopción de Innovaciones'
            },
            legend: {
                display: false
            }
        }
    }
});
