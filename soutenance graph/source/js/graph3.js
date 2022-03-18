const chart1 = document.getElementById("chart1");

const barChart = new Chart(chart1, {
    type:"line",
    data: {
        labels:["2018","2019","2020","2021-2022"],
        datasets: [{
            tension:0.2,
            borderWidth:4,
            pointRadius:8,
            barThickness: 80,
            maxBarThickness: 100,
            minBarLength: 10,
            label:"Alternants",
            data:[8,56,77,92],
            backgroundColor: [
                "rgb(42, 109, 233)"
            ],
            hoverOffset : 15
        }]
    },  
})
