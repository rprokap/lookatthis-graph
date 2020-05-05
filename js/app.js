function carryingCapacity() {
    var capacityValue = document.getElementById("capacity").value;
}

const addVar = function() {
  //stuff
};

// pressing enter function make it work -> necessary ?
document.addEventListener("keyup", function(pressEnter) {
  if (pressEnter.keyCode == 13) {
  addVar();
  }
});

const xpoints = [];
const ypoints = [];

//push points to arrays here-> before graph

var trace1 = {
  x: xpoints,
  y: ypoints,
  type: 'scatter'
};

var data = [trace1];

Plotly.newPlot("graph", data);
