import { phones } from "/phones.js";

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

const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileNav = document.querySelector("#mobileNav");
const closeMobileNav = document.querySelector("#closeMobile");
const filterButton = document.querySelector("#filterButton");
const filter = document.querySelector("#filter");

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
