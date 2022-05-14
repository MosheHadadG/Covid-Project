export const ctx = document.getElementById("myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 0, 500);
gradient.addColorStop(0, "#557a95");
gradient.addColorStop(1, "#557a95");

export const data = {
  labels: [],
  datasets: [{
      label: 'Covid',
      data: ['ss'],
      borderColor: "#fff",
      backgroundColor: ["#115f9a", "#1984c5", "#22a7f0", "#48b5c4", "#76c68f", "#a6d75b", "#c9e52f", "#d0ee11", "#d0f400"]
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

export const myChart = new Chart(ctx, config);