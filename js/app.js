function carryingCapacity() {
    var capacityValue = document.getElementById("capacity").value;
}

const xpoints = [];
const ypoints = [];

//push points here-> before graph

var trace1 = {
  x: xpoints,
  y: ypoints,
  type: 'scatter'
};

var data = [trace1];

Plotly.newPlot("graph", data);
