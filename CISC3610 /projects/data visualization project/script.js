const years = Object.keys(sampleData); // years from the data provided

const data = Object.values(sampleData); // data as values from data provided
const horozontalChartDetails = {

    type: 'horizontalBar', // which chart will be drawn shown

    data: {

      labels: years,

      datasets: [

          {

            label: "Students Percentage",

            data: data,

            backgroundColor: ["#ffe6e6", "#e6ccff","#d1e0e0", "#d9e6f2","#ffe6cc", "#9fbfdf", "#f2e6ff","#ecd9c6","#ccffeb","#ccccff"], 

            borderWidth: 2

          },  

        ]

    },

    options: {

        title: {

            display: true,

            text: 'Horizontal bar'

        },

        legend: { // if true will display legends

            display: false

        },

        tooltips: { // if true will display tooltips

            enabled: false

        },

        scales: {

            yAxes: [{

            ticks: {

                reverse: false // to reverse order of y axis ticks

            }

            }],

        }

    }

}

const doughnutChartDetails = {

    type: 'doughnut',

    data: {

      labels: years,

      datasets: [

          {

            label: "Students Percentage",

            data: data,

            backgroundColor: ["#ffe6e6", "#e6ccff","#d1e0e0", "#d9e6f2","#ffe6cc", "#9fbfdf", "#f2e6ff","#ecd9c6","#ccffeb","#ccccff"], 

            borderWidth: 2

          },  

        

          ]

    },

    options: {

        title: {

            display: true,

            text: 'doughnut chart'

        },

        legend: { // if true will display legends

            display: false

        },

        tooltips: { // if true will display tooltips

            enabled: false

        },

    }

}

const barChart = document.getElementById('chartJSContainer').getContext('2d');

const doughnut = document.getElementById('doughnutChartContainer').getContext('2d');

const myHorizontalChart = new Chart(barChart, horozontalChartDetails);

const myDoughnutChart = new Chart(doughnut, doughnutChartDetails)

