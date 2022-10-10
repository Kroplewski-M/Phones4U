import { phones } from "/phones.js";

const diplayPhones = document.querySelector("#displayPhones");

for (let i = 0; i < Object.keys(phones).length; i++) {
  let phone = document.createElement("div");
  phone.innerHTML = `
    <div class="card">
    <image src="./images/phones/${phones[i].ext}" class="cardImage" style="width:100px">
    <h3>${phones[i].name}</h3>
    <p>${phones[i].brand}</p>
    <p>${phones[i].memory}</p>
    <p>${phones[i].cost}</p>
    <p>${phones[i].colors}</p>
    </div>
    `;
  displayPhones.appendChild(phone);
}
