"use strict";

let height = document.querySelector("#height-input");
let weight = document.querySelector("#weight-input");
let heightImperialButton = document.querySelector("#heightImperialButton");
let weightImperialButton = document.querySelector("#weightImperialButton");
let heightMetricButton = document.querySelector("#heightMetricButton");
let weightMetricButton = document.querySelector("#weightMetricButton");
let heightLabel = document.querySelector("#height-label");
let weightLabel = document.querySelector("#weight-label");
let maleButton = document.querySelector("#male-button");
let femaleButton = document.querySelector("#female-button");
let bmiResult = document.querySelector("span");
let triangle = document.querySelector("#triangle");
let bmiHeight;
let bmiWeight;
let bmi;

heightImperialButton.addEventListener("click", () => {
  heightImperialButton.classList.toggle("active");
  heightMetricButton.classList.toggle("active");
  changeHeightLabelText();
  convertHeightInputValue();
});

heightMetricButton.addEventListener("click", () => {
  heightImperialButton.classList.toggle("active");
  heightMetricButton.classList.toggle("active");
  changeHeightLabelText();
  convertHeightInputValue();
});

weightMetricButton.addEventListener("click", () => {
  weightImperialButton.classList.toggle("active");
  weightMetricButton.classList.toggle("active");
  changeWeightLabelText();
  convertWeightInputValue();
});

weightImperialButton.addEventListener("click", () => {
  weightImperialButton.classList.toggle("active");
  weightMetricButton.classList.toggle("active");
  changeWeightLabelText();
  convertWeightInputValue();
});

let changeHeightLabelText = () => {
  if (heightMetricButton.className == "active") {
    heightLabel.textContent = "cm";
  } else {
    heightLabel.textContent = "inch";
  }
};

let changeWeightLabelText = () => {
  if (weightMetricButton.className == "active") {
    weightLabel.textContent = "kg";
  } else {
    weightLabel.textContent = "lb";
  }
};

let convertHeightInputValue = () => {
  if (height.value != "") {
    if (heightMetricButton.className != "active") {
      height.value = (Number(height.value) / 2.54).toFixed(2);
    } else {
      height.value = (Number(height.value) * 2.54).toFixed(2);
    }
  }
};

let convertWeightInputValue = () => {
  if (weight.value != "") {
    if (weightMetricButton.className != "active") {
      weight.value = (Number(weight.value) / 0.453592).toFixed(2);
    } else {
      weight.value = (Number(weight.value) * 0.453592).toFixed(2);
    }
  }
};

let outputBMI = () => {
    validation();
    getBMIHeight();
    getBMIWeight();
    calculateBMI();
    bmiResult.textContent = bmi;
    changeBmiDiagram();
}


let validation = () => {
  if(weight.value == '' || height.value == '' ){
    alert('Please enter weight and height');
  } 
}

maleButton.addEventListener("click", () => {
  if (femaleButton.className != "active") {
    maleButton.classList.toggle("active");
    outputBMI();
  }
});

femaleButton.addEventListener("click", () => {
  if (maleButton.className != "active") {
    femaleButton.classList.toggle("active");
    outputBMI();
  }
});

let getBMIHeight = () => {
  if (heightMetricButton.className != "active") {
    bmiHeight = (height.value * 2.54) / 100;
  } else {
    bmiHeight = height.value / 100;
  }
};

let getBMIWeight = () => {
  if (weightMetricButton.className != "active") {
    bmiWeight = weight.value * 0.453592;
  } else {
    bmiWeight = weight.value;
  }
};

let calculateBMI = () => {
  if (height.value != "" && weight.value != "") {
    bmi = (bmiWeight / bmiHeight ** 2).toFixed(2);
  }
};

let changeBmiDiagram = () => {
  if (bmi < 18.5) {
    bmiResult.style.color = "#ed1c24";
  } else if (bmi >= 18.5 && bmi <= 25) {
    bmiResult.style.color = "#78a50e";
  } else if (bmi > 25 && bmi <= 30) {
    bmiResult.style.color = "#FDB913";
  } else {
    bmiResult.style.color = "#ed1c24";
  }
  let trianglePlace = (bmi - 13.5) * 5;
  if(trianglePlace >= 0 && trianglePlace <= 100){
      triangle.style.left = trianglePlace + "%";
  } else if(trianglePlace < 0) {
    triangle.style.left = "0%";
  } else if (trianglePlace > 100){
    triangle.style.left = "100%";
  }
};

weight.addEventListener("keyup", () => {
  if (
    weight.value != "" &&
    (maleButton.className == "active" || femaleButton.className == "active")
  ) {
    outputBMI();
  }
});

height.addEventListener("keyup", () => {
  if (
    height.value != "" &&
    (maleButton.className == "active" || femaleButton.className == "active")
  ) {
    outputBMI();
  }
});

weight.addEventListener('keypress', () => {
  if(weight.value.length > weight.maxLength){
    weight.value = weight.value.slice(0, weight.maxLength);
  }
})
height.addEventListener('keypress', () => {
  if(height.value.length > height.maxLength){
    height.value = height.value.slice(0, height.maxLength);
  }
})