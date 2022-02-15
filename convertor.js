let lenP = document.getElementById("len-p");
let volP = document.getElementById("vol-p");
let massP = document.getElementById("mass-p");
let btn = document.getElementById("btn");
let warning = document.getElementById("warning")

let inputBox = 1;

const kilosToPound = (inputBox * 2.20462).toFixed(3);
const poundsToKilos = (inputBox / 2.20462).toFixed(3);

const meterToFeet = (inputBox * 3.28084).toFixed(3);
const feetToMeter = (inputBox / 3.28084).toFixed(3);

const litersToGallons = (inputBox * 0.264172).toFixed(3);
const gallonsToLiters = (inputBox / 0.264172).toFixed(3);

lenP.textContent = `${inputBox} meters = ${meterToFeet} feet | ${inputBox} feet = ${feetToMeter} meters`;
volP.textContent = `${inputBox} liters = ${litersToGallons} gallons | ${inputBox} gallons = ${gallonsToLiters} liters`;
massP.textContent = `${inputBox} kilos = ${kilosToPound} pounds | ${inputBox} pounds = ${poundsToKilos} kilos`;


btn.addEventListener("click", function () {
  warning.textContent = ``
  inputBox = document.getElementById("input-box").value;
  console.log(inputBox);

  const kilosToPound = (inputBox * 2.20462).toFixed(3);
  const poundsToKilos = (inputBox / 2.20462).toFixed(3);

  const meterToFeet = (inputBox * 3.28084).toFixed(3);
  const feetToMeter = (inputBox / 3.28084).toFixed(3);

  const litersToGallons = (inputBox * 0.264172).toFixed(3);
  const gallonsToLiters = (inputBox / 0.264172).toFixed(3);

  if(inputBox === ""){
    warning.textContent = `Type something!!! Stupid.😑`
  }else if(inputBox < "0"){
    warning.textContent = `What are you doing redefining physics???😑`
  }
  else{
      lenP.textContent = `${inputBox} meters = ${meterToFeet} feet | ${inputBox} feet = ${feetToMeter} meters`;
      volP.textContent = `${inputBox} liters = ${litersToGallons} gallons | ${inputBox} gallons = ${gallonsToLiters} liters`;
      massP.textContent = `${inputBox} kilos = ${kilosToPound} pounds | ${inputBox} pounds = ${poundsToKilos} kilos`;
  }
  
 });
