"use strict";


let height = document.querySelector('#height-input');
let weight = document.querySelector('#weight-input');
let buttons = document.querySelectorAll('button');
let heightImperialButton = document.querySelector('#heightImperialButton');
let weightImperialButton = document.querySelector('#weightImperialButton');
let heightMetricButton = document.querySelector('#heightMetricButton');
let weightMetricButton = document.querySelector('#weightMetricButton');
let heightLabel = document.querySelector('#height-label');
let weightLabel = document.querySelector('#weight-label');


// buttons.forEach( button => {
//     button.addEventListener('click', () => {
//         button.classList.toggle('active');
//     })
// });

heightImperialButton.addEventListener('click', () => {
    heightImperialButton.classList.toggle('active');
    heightMetricButton.classList.toggle('active');
    changeHeightLabelText();
    convertHeightInputValue();
})

heightMetricButton.addEventListener('click', () => {
    heightImperialButton.classList.toggle('active');
    heightMetricButton.classList.toggle('active');
    changeHeightLabelText();
    convertHeightInputValue();
})

weightMetricButton.addEventListener('click', () => {
    weightImperialButton.classList.toggle('active');
    weightMetricButton.classList.toggle('active');
    changeWeightLabelText();
    convertWeightInputValue();
})

weightImperialButton.addEventListener('click', () => {
    weightImperialButton.classList.toggle('active');
    weightMetricButton.classList.toggle('active');
    changeWeightLabelText();
    convertWeightInputValue();
})

let changeHeightLabelText = () => {
    if(heightMetricButton.className == 'active'){
        heightLabel.textContent = 'cm';
    } else {
        heightLabel.textContent = 'inch';
    }
}

let changeWeightLabelText = () => {
    if(weightMetricButton.className == 'active'){
        weightLabel.textContent = 'kg';
    } else {
        weightLabel.textContent = 'lb';
    }
}

let convertHeightInputValue = () => {
    if(height.value != ''){
        if(heightMetricButton.className != 'active'){
            height.value =  (Number(height.value) / 2.54).toFixed(2);  
        } else {
            height.value =  (Number(height.value) * 2.54).toFixed(2);
        }
    }
}

let convertWeightInputValue = () => {
    if(weight.value != ''){
        if(weightMetricButton.className != 'active'){
            weight.value =  (Number(weight.value) / 0.453592).toFixed(2);  
        } else {
            weight.value =  (Number(weight.value) * 0.453592 ).toFixed(2);
        }
    }
}