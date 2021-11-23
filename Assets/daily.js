
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [71, 29],
            backgroundColor: [
                '#A25075',
                '#00838f',
            ],
            borderWidth: 1,
            cutout: "80%"
        }]
    },
});