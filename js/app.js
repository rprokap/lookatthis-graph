function carryingCapacity() {
    var capacityValue = document.getElementById("capacity").value;
}

const addVar = function() {
  //stuff
};

document.addEventListener("keyup", function(pressEnter) {
  if (pressEnter.keyCode == 13) {
  addVar();
  }
});

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
