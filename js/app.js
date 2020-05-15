// <!-- all images used were liscenced for reuse with modification -->
// <!-- shortcut icon retrieved from https://en.wikipedia.org/wiki/Logistic_function -->
// <!-- all plotly resources were retrieved from https://plotly.com/javascript/ and were used for graphing -->

let k;
let yearDiff;
let eExp;
let ppvCv;
let cvPpv;
let step5;
let step6;
let lnStep6;
let kCv;
let eqSolution;
let timeDiff;

function carryingCapacity() {
    var capacityValue = document.getElementById("capacity").value;
}

function currentPop() {
    var currentPopValue = document.getElementById("currentpop").value;
}

function currentPopYear() {
    var currentPopYear = document.getElementById("currentpopyear").value;
}

function pastPop() {
    var pastPopValue = document.getElementById("pastpop").value;
}

function pastPopYear() {
    var pastPopYear = document.getElementById("pastpopyear").value;
}

window.onload = function() {
  document.getElementById("goGraph").onclick = logCalculation;
};

//  currentPopValue = (pastPopValue * capacityValue)
//  /[pastPopValue + (capacityValue - pastPopValue)*e^(k*capacityValue*(currentPopYear - pastPopYear))]

// values for testing/examples
// carrying capacity: 9.5
// current population: 7.55
// current population year: 2018
// past population: 7.633
// past population year: 2017

const xpoints = [];
const ypoints = [];

const logCalculation = function() {
  const kCalculation = function() {
    yearDiff = currentPopYear - pastPopYear;
    eExp = currentValue * yearDiff;
    ppvCv = pastPopValue * capacityValue;
    cvPpv = capacityValue - pastPopValue;
    step5 = ppvCv / currentPopValue;
    step6 = step5 - pastPopValue;
    lnStep6 = Math.log(step6);
    k = -lnStep6 / eExp;
  };

  const ySimplify = function() {
    kCv = k * capacityValue;
    for (let i = pastPopYear + 1; i < pastPopYear + 100; i += 10) {
      xpoints.push(i);
      timeDiff = i - pastPopYear;
      eqSolution = (ppvCv/(pastPopValue + (cvPpv * e^(-k * kCv))));
      ypoints.push(eqSolution);
    }
  };
};

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
