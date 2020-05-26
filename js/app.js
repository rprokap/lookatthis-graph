// <!-- all images used were licensed for reuse with modification -->
// <!-- shortcut icon retrieved from https://en.wikipedia.org/wiki/Logistic_function -->
// <!-- all plotly resources were retrieved from https://plotly.com/javascript/ and were used for graphing -->
// information on the earth's carrying capacity was retrieved from LiveScience at www.livescience.com/16493-people-planet-earth-support.html.

// 7.550 billion on July 1, 2017 and
// 9.633 billion on July 1, 2018
// carrying capacity 9.5 billion
let xpoints = [];
let ypoints = [];

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
let ypoint;

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

  // test:
  // alert(k);
  // kCalculation is accurate and displays the correct value
}

function xCoords() {
  for (let i = 2020; i <= 2250; i += 10) {
    xpoints.push(i);
    ypoints.push(numerator / (y0 + (capacitydiff * Math.exp(-k * m * (i - 2017)))));
  }
}

kCalculation();
xCoords();

// alert(k);
// alert(xpoints);
// test successful

//push points to arrays here-> before graph
// xpoints.push(1, 2, 3, 4);
// ypoints.push(2, 4, 6, 8);

// syntax for plotly functions (below) was learned from the plotly line chart tutorial at https://plotly.com/javascript/line-charts/

var trace1 = {
  x: xpoints,
  y: ypoints,
  marker: {
    color: 'rgb(255, 97, 123)',
  },
  type: 'scatter'
};

var data = [trace1];

var aesthetics = {
  title: 'Population Growth Over Time',
  xaxis: {
    title: 'Year'
  },
  yaxis: {
    title: 'Population (billions)'
  }
};

Plotly.newPlot("graph", data, aesthetics);
