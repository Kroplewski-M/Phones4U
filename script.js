import { phones } from "/phones.js";

const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileNav = document.querySelector("#mobileNav");
const closeMobileNav = document.querySelector("#closeMobile");
const filterButton = document.querySelector("#filterButton");
const filter = document.querySelector("#filter");

//SHOW MOBILE MENUS
let showMobileNav = false;
let showMobileFilter = false;
function toggleMobileNav() {
  if (showMobileNav) {
    mobileNav.classList.remove("hideMobileNav");
  } else {
    mobileNav.classList.add("hideMobileNav");
  }
}
function toggleMobileFilter() {
  if (showMobileFilter) {
    filter.classList.remove("hideFilter");
  } else {
    filter.classList.add("hideFilter");
  }
}

mobileMenuBtn.addEventListener("click", () => {
  showMobileNav = !showMobileNav;
  toggleMobileNav();
});

closeMobileNav.addEventListener("click", () => {
  showMobileNav = !showMobileNav;
  toggleMobileNav();
});

filterButton.addEventListener("click", () => {
  showMobileFilter = !showMobileFilter;
  toggleMobileFilter();
});

//UPDATE SLIDER
let minPrice = document.querySelector("#minPrice");
let maxPrice = document.querySelector("#maxPrice");
let minPriceValue = document.querySelector("#minPriceValue");
let maxPriceValue = document.querySelector("#maxPriceValue");

minPrice.addEventListener("input", () => {
  minPriceValue.innerHTML = "£" + minPrice.value;
});
maxPrice.addEventListener("input", () => {
  maxPriceValue.innerHTML = "£" + maxPrice.value;
});

const diplayPhones = document.querySelector("#displayPhones");

for (let i = 0; i < Object.keys(phones).length; i++) {
  var cols = phones[i].colors.join(", ");
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
    <p class="cardDesc">Colors:<span class="colors">${cols}</span></p>
    `;
  displayPhones.appendChild(phone);
}

//FILTER
let filteredItems = [];
const filterPhones = Object.entries(phones);

function filterAllPhones() {
  filteredItems = [];
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "checkbox") {
      if (inputs[i].checked == true) {
        filteredItems.push(inputs[i].value.toString());
      }
    }
  }
  //console.log(filteredItems.values());
  for (let i = 0; i < Object.keys(phones).length; i++) {
    // if (Object.values(phones[i]).includes(filteredItems[0])) {
    //   console.log(phones[i]);
    // }
    // if (Object.values(phones[i]).every((value) => value == "Samsung")) {
    //   console.log(phones[i]);
    // }
    if (filteredItems.every((value) => Object.values(phones[i]).includes(value))) {
      console.log(phones[i]);
    }
  }
}

let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", () => {
  console.log(filterAllPhones());
});
