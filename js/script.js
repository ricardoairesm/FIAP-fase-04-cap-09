document.addEventListener('DOMContentLoaded', function() {
    console.log('Smart Wallet iniciado!');

    // Configuração do gráfico de transações
    const ctx = document.getElementById('transactionsChart');

    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['28/11', '29/11', '30/11', '01/12', '02/12', '03/12', '04/12'],
                datasets: [{
                    label: 'Saldo diário',
                    data: [5200, 5150, 5300, 5280, 4950, 5450, 5487],
                    borderColor: '#495057',
                    backgroundColor: 'rgba(73, 80, 87, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#495057',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#495057',
                        padding: 12,
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        callbacks: {
                            label: function(context) {
                                return 'R$ ' + context.parsed.y.toFixed(2);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function(value) {
                                return 'R$ ' + value.toLocaleString('pt-BR');
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
});
