// <!-- all images used were licensed for reuse with modification -->
// <!-- shortcut icon retrieved from https://en.wikipedia.org/wiki/Logistic_function -->
// <!-- all plotly resources were retrieved from https://plotly.com/javascript/ and were used for graphing -->
// information on the earth's carrying capacity was retrieved from LiveScience at www.livescience.com/16493-people-planet-earth-support.html.

// 7.550 billion on July 1, 2017 and
// 9.633 billion on July 1, 2018
// carrying capacity 9.5 billion

let y0 = 7.550;
let y = 7.633;
let t = 1;
let m = 9.5;
let numerator;
let numdivy;
let divoriginal;
let capacitydiff;
let prelog;
let exp;
let log;
let k;

window.onload = function() {
  kCalculation();
  pointCalculation();
};

//function to solve for k
function kCalculation() {
  exp = -m * t;
  numerator = y0 * m;
  numdivy = numerator / y;
  divoriginal = numdivy - y0;
  capacitydiff = m - y0;
  prelog = divoriginal / capacitydiff;
  log = Math.log(prelog);
  k = log / exp;
}

// function to solve for points with k
function pointCalculation() {
  //stuff
}

let xpoints = [];
let ypoints = [];

xpoints.forEach(function (i) {
    pointCalculation(i);
    ypoints.push(i);
});

//push points to arrays here-> before graph
// xpoints.push(1, 2, 3, 4);
// ypoints.push(2, 4, 6, 8);

var trace1 = {
  x: xpoints,
  y: ypoints,
  type: 'scatter'
};

var data = [trace1];

Plotly.newPlot("graph", data);
