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
