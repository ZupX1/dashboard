const chart1 = document.getElementById("chart1");

const barChart = new Chart(chart1, {
    type:"bar",
    data: {
        labels:["Entreprise privée","Association","Etablissement public","Collectivité","Entreprise publique"],
        datasets: [{
            barThickness: 80,
            maxBarThickness: 100,
            minBarLength: 10,
            label:"Nombre d'entreprises",
            data:[438,33,20,12,4],
            backgroundColor: [
                "rgb(42, 109, 233)"
            ],
            hoverOffset : 15
        }]
    },
    options:{
        scales:{
            y:{
                suggestedMax: 600
            }
        }
    }
})
