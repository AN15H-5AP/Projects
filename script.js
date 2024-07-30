const ctx = document.getElementById('storageChart').getContext('2d');
const storageChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Used Space', 'Free Space'],
        datasets: [{
            label: 'Storage',
            data: [75, 50],
            backgroundColor: ['#6a89cc', '#f0f2f5'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
