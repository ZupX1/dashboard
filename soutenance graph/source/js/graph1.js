const chart1 = document.getElementById("chart1");

const barChart = new Chart(chart1, {
    type:"pie",
    data: {
        labels:["GE","ETI","TPE","PME"],
        datasets: [{
            data:[6.9,12.2,15.8,65.1],
            backgroundColor: [
                "lightgreen",
                "yellow",
                "crimson",
                "blue",
            ],
            hoverOffset : 15
        }]
    },
})

