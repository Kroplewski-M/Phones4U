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
let filtered = [];
function renderPhones() {
  diplayPhones.innerHTML = "";
  for (let i = 0; i < filtered.length; i++) {
    var cols = phones[i].colors.join(", ");
    let phone = document.createElement("div");
    phone.classList.add("card");
    phone.innerHTML = `
      <div class="cardImgCon">
        <image src="./images/phones/${filtered[i].ext}" class="cardImage">
      </div>
      <h3>${filtered[i].name}</h3>
      <p><span class="cardDesc">Brand:</span>${filtered[i].brand}</p>
      <p><span class="cardDesc">Memory:</span>${filtered[i].memory}</p>
      <p><span class="cardDesc">Price:</span> £${filtered[i].cost}</p>
      <p class="cardDesc">Colors:<span class="colors">${cols}</span></p>
      `;
    displayPhones.appendChild(phone);
  }
}

//FILTER
let brands = [];
let colors = [];
let memory = [];
let search = document.querySelector("#search");

function filterAllPhones() {
  //RESET ALL FILTERS
  brands = [];
  colors = [];
  memory = [];
  filtered = [];
  //ADD FILTERS

  //BRANDS
  const phoneBrands = Array.from(document.querySelectorAll(".brands"));
  phoneBrands.forEach(function (brand) {
    if (brand.checked) {
      brands.push(brand.value);
    }
  });
  //MEMORY
  const phoneMemory = Array.from(document.querySelectorAll(".memory"));
  phoneMemory.forEach(function (mem) {
    if (mem.checked) {
      memory.push(mem.value);
    }
  });
  //COLORS
  const phoneColors = Array.from(document.querySelectorAll(".colors"));
  phoneColors.forEach(function (color) {
    if (color.checked) {
      colors.push(color.value);
    }
  });

  const phoneArr = Object.entries(phones);
  phoneArr.forEach(function (phone) {
    brands.length == 0 ? (brands = "all") : "";
    memory.length == 0 ? (memory = "all") : "";
    colors.length == 0 ? (colors[0] = "all") : "";

    if (
      (search.value == phone[1].brand || phone[1].name.includes(search.value) || search.value == "") &&
      phone[1].cost >= minPrice.value &&
      phone[1].cost <= maxPrice.value &&
      (brands.includes(phone[1].brand) || brands == "all") &&
      (memory.includes(phone[1].memory) || memory == "all") &&
      (colors.some((value) => phone[1].colors.includes(value)) || colors[0] == "all")
    ) {
      filtered.push(phone[1]);
    }
  });
  renderPhones();
}

let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", () => {
  filterAllPhones();
  console.log(filtered);
});

//INIT
filterAllPhones();
console.log(filtered);
