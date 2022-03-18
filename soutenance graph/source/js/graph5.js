const chart1 = document.getElementById("chart1");

const barChart = new Chart(chart1, {
    type:"bar",
    data: {
        labels:["Industrie","Filière numérique","S&C aux entreprises","Commerce","Services (Hors num)","Construction","Administration","Agriculture"],
        datasets: [{
            data:[39,78,93,70,127,12,23,1],
            barThickness: 50,
            maxBarThickness: 100,
            minBarLength: 10,
            label:"Nombre d'entreprises",
            backgroundColor: [
                "rgb(42, 109, 233)"
            ],
            
            hoverOffset : 15
        }],
    },
    options:{
        scales:{
            x:{
                ticks:{
                    font:{
                        size:11
                    }
                }
            }
        }
    }
})
