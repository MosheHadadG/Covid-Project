export const ctx = document.getElementById("myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 0, 500);
gradient.addColorStop(0, "#557a95");
gradient.addColorStop(1, "#557a95");


export const data = {
  labels: [],
  datasets: [{
    label: '',
    data: [],
    borderColor: "#fff",
    backgroundColor: ['#003f5c','#58508d','#bc5090','#ff6361','#ffa600']
    ,
    pointStyle: 'circle',
    pointRadius: 5,
    pointHoverRadius: 8
  }]


};

export const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Statistic Covid',
      }
    }
  }
};


export function addLabel(myChart, label) {
  myChart.data.labels.push(label);
  myChart.update();
}
export function removeLabels(myChart) {
  myChart.data.labels = [];
  myChart.update();
}


export function addData(myChart, data) {
  myChart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  myChart.update();
}

export function removeData(myChart) {
  myChart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });
  myChart.update();
}

export function changeTitle(myChart, title) {
  myChart.data.datasets[0].label = `${title} cases`;
  myChart.update();
  
}



export const myChart = new Chart(ctx, config);