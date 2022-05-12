export const ctx = document.getElementById("myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 0, 500);
gradient.addColorStop(0, "#557a95");
gradient.addColorStop(1, "#557a95");
const actions = [
  {
    handler: (chart) => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = 'cirlce';
      });
      chart.update();
    }
  },
  {
    handler: (chart) => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = 'cross';
        chart.update();
      });
  }
  }
];

export const data = {
  labels: [],
  datasets: [
    {
      label: 'Covid',
      data: [],
      borderColor: "#fff",
      backgroundColor: gradient,
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 8
    }
  ]
};

export const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
      }
    }
  }
};


export function addLabel(myChart,label) {
  myChart.data.labels.push(label);
  myChart.update();
}
export function removeLabels(chart) {
  chart.data.labels = [];
  chart.update();
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

export const myChart = new Chart(ctx, config, actions);