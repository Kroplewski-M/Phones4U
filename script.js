import { phones } from "/phones.js";

//SET MIN PRICE
let minPrice = document.querySelector("#minPrice");
let minSlider = document.querySelector("#minPriceSlider");

minSlider.oninput = function () {
  minPrice.innerHTML = "£" + minSlider.value;
};

//SET MAX PRICE
let maxPrice = document.querySelector("#maxPrice");
let maxSlider = document.querySelector("#maxPriceSlider");

maxSlider.oninput = function () {
  maxPrice.innerHTML = "£" + maxSlider.value;
};

//GET REST OF FILTERS
let brand = document.querySelector("#selectBrand");
let color = document.querySelector("colors");
let memory = document.querySelector("memoryBtn");
//DISPLAY PHONES
const diplayPhones = document.querySelector("#displayPhones");

for (let i = 0; i < Object.keys(phones).length; i++) {
  let phone = document.createElement("div");
  phone.classList.add("card");
  phone.innerHTML = `
    <div class="cardImgCon">
      <image src="./images/phones/${phones[i].ext}" class="cardImage">
    </div>
    <h3>${phones[i].name}</h3>
    <p><span class="cardDesc">Brand:</span>${phones[i].brand}</p>
    <p><span class="cardDesc">Memory:</span>${phones[i].memory}</p>
    <p><span class="cardDesc">Price:</span> £${phones[i].cost}</p>
    <p class="cardDesc">Colors:<span class="colors">${phones[i].colors}</span></p>
    `;
  displayPhones.appendChild(phone);
}
