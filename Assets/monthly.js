
var ctx = document.getElementById('TwoChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [71, 29],
            backgroundColor: [
                'rgb(170, 51, 106)',
                'rgb(70,130,180)',
            ],
            borderWidth: 1,
            cutout: "80%"
        }]
    },
});