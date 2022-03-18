const chart1 = document.getElementById("chart1");

const barChart = new Chart(chart1, {
    type:"doughnut",
    data: {
        labels:["Métropole de Rouen","Rouen","Hors Normandie","Eure","Arr. du Havre","Arr. de Rouen","Arr. de Dieppe","Normandie hors 76 et 27"],
        datasets: [{
            data:[36.7,21.9,17.2,11.9,4.5,3.2,2.3,2.3],
            backgroundColor: [
                "lightgreen",
                "yellow",
                "crimson",
                "blue",
                "purple",
                "orange",
                "darkgrey",
                "cyan"
            ],
            hoverOffset : 15
        }]
    },
})
