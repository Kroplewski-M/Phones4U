import { phones } from "/phones.js";

//CHECKING IF FILTER RESULTS COMES OUT EMPTY
let isEmpty = false;
//SET MIN PRICE
let minPrice = document.querySelector("#minPrice");
let minSlider = document.querySelector("#minPriceSlider");

minSlider.oninput = function () {
  minPrice.innerHTML = "£" + minSlider.value;
  renderPhones();
};

//SET MAX PRICE
let maxPrice = document.querySelector("#maxPrice");
let maxSlider = document.querySelector("#maxPriceSlider");

maxSlider.oninput = function () {
  maxPrice.innerHTML = "£" + maxSlider.value;
  renderPhones();
};

//GET REST OF FILTERS
let brand = document.querySelector("#selectBrand");
let color = document.querySelector("#colors");
let memory = document.querySelector("#memoryBtn");
let search = document.querySelector("#phoneSearch");
let searchButton = document.querySelector("#phoneButton");

//FILTER
brand.addEventListener("change", () => {
  renderPhones();
});
color.addEventListener("change", () => {
  renderPhones();
});
memory.addEventListener("change", () => {
  renderPhones();
});
search.addEventListener("keyup", function (event) {
  console.log(event);
  if (event.key === "Enter") {
    event.preventDefault();
    renderPhones();
  }
  if (event.key === "Backspace") {
    if (search.value == "") {
      renderPhones();
    }
  }
});
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  renderPhones();
});

function uppercase() {
  return search.value[0].toUpperCase() + search.value.slice(1);
}
//FILTER PHONE OBJECT
const filterPhones = Object.entries(phones);
function filter() {
  const filtered = filterPhones.filter(function ([key, value]) {
    return (
      value.cost > minSlider.value &&
      value.cost < maxSlider.value &&
      (memory.value != "any" ? value.memory == memory.value : value.memory) &&
      (brand.value != "any" ? value.brand == brand.value : value.brand) &&
      (color.value != "any" ? value.colors.includes(color.value) : value.colors) &&
      (search.value != "" ? value.name.includes(uppercase()) || value.brand.includes(uppercase()) : value.name)
    );
  });
  if (filtered.length == 0) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return filtered;
}

//DISPLAY PHONES
const diplayPhones = document.querySelector("#displayPhones");

function renderPhones() {
  filter();
  displayPhones.innerHTML = "";

  if (isEmpty) {
    let message = document.createElement("p");
    message.classList.add("text-center");
    message.innerHTML = "Found 0 results!";
    displayPhones.appendChild(message);
  } else {
    for (let i = 0; i < filter().length; i++) {
      var cols = filter()[i][1].colors.join(", ");
      let phone = document.createElement("div");
      phone.classList.add("card");
      phone.innerHTML = `
      <div class="cardImgCon">
      <image src="./images/phones/${filter()[i][1].ext}" class="cardImage">
      </div>
      <h3>${filter()[i][1].name}</h3>
      <p><span class="cardDesc">Brand:</span>${filter()[i][1].brand}</p>
      <p><span class="cardDesc">Memory:</span>${filter()[i][1].memory}</p>
      <p><span class="cardDesc">Price:</span> £${filter()[i][1].cost}</p>
      <p class="cardDesc">Colors:<span class="colors">${cols}</span></p>
      `;
      displayPhones.appendChild(phone);
    }
  }
}
renderPhones();

//DESKTOP NAV
const samsung = document.querySelector("#samsung");
const iphone = document.querySelector("#iphone");
const google = document.querySelector("#google");
const motorolla = document.querySelector("#motorolla");
const nokia = document.querySelector("#nokia");

samsung.addEventListener("click", () => {
  brand.value = "Samsung";
  renderPhones();
});
iphone.addEventListener("click", () => {
  brand.value = "Apple";
  renderPhones();
});
google.addEventListener("click", () => {
  brand.value = "Google";
  renderPhones();
});
motorolla.addEventListener("click", () => {
  brand.value = "Motorolla";
  renderPhones();
});
nokia.addEventListener("click", () => {
  brand.value = "Nokia";
  renderPhones();
});

//SHOP BUTTON
const shopNowBtn = document.querySelector("#shopNow");
shopNowBtn.addEventListener("click", () => {
  document.getElementById("main").scrollIntoView();
});

//MOBILE BUTTON WORK

//MOBILE NAV
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileNav = document.querySelector("#mobileNav");
const closeMobile = document.querySelector("#closeMobile");
let showMenu = false;

function showMenuFlip() {
  showMenu = !showMenu;
  if (showMenu) {
    mobileNav.classList.remove("hideMobileNav");
  } else {
    mobileNav.classList.add("hideMobileNav");
  }
}
closeMobile.addEventListener("click", () => {
  showMenuFlip();
});
mobileMenuBtn.addEventListener("click", () => {
  showMenuFlip();
});
