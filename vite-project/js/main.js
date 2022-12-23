import "/css/style.css";
import { img, API } from "./consts";

const button1 = document.getElementById("chara");
const button2 = document.getElementById("weapons");
const button3 = document.getElementById("artifacts");
const buttons = document.querySelectorAll(".button");
const text = document.getElementById("quote");

buttons.forEach((button) => button.addEventListener("click", whalen));

function whalen(e) {
  if (e.target === button1) {
    getData(API.characters, img.character, img.characteralt);
  } else if (e.target === button2) {
    data2(API.weapons, img.nations, img.nationsalt);
  } else if (e.target === button3) {
    data3(API.artifacts, img.enemies, img.enemiesalt);
  } else {
    text.innerHTML = "";
  }
}

async function getData(x, y, z) {
  try {
    text.innerHTML = "";
    const response1 = await fetch(x);
    const data1 = await response1.json();
    data1.forEach((x) =>
      text.insertAdjacentHTML(
        "beforeend",
        `<div class="card">

    <h1> ${x.name} </h1>
    <h2>  ${x.vision} ${x.weapon} </h2>
    <h3> ${x.rarity} - Obtained by ${x.obtain} </h3> 
    <p> ${x.description} </p> 
     
   </div>`
      )
    );
    text.insertAdjacentHTML(
      "afterbegin",
      `<img class="image" src="${y}" alt="${z}">`
    );
  } catch (error) {
    console.log(error);
  }
}

async function data2(x, y, z) {
  try {
    text.innerHTML = "";
    const response1 = await fetch(x);
    const data1 = await response1.json();
    data1.forEach((x) =>
      text.insertAdjacentHTML(
        "beforeend",
        `<div class="card">

    <h1> ${x.name} </h1>
    </h2>${x.type} </h2>
    <h3>  ATK: ${x.atk} <h3> 
    <p> ${x.rarity} - Obtained by ${x.obtain} </p>     
   </div>`
      )
    );
    text.insertAdjacentHTML(
      "afterbegin",
      `<img class="image" src="${y}" alt="${z}">`
    );
  } catch (error) {
    console.log(error);
  }
}

async function data3(x, y, z) {
  try {
    text.innerHTML = "";
    const response1 = await fetch(x);
    const data1 = await response1.json();
    data1.forEach((x) =>
      text.insertAdjacentHTML(
        "beforeend",
        `<div class="card">

    <h1> ${x.name} </h1>
    <h2>2 Set Bonus: ${x._set_bonus} </h2>
    <h2>4 Set Bonus: ${x._set_bonus} <h3> 

    </div>`
      )
    );
    text.insertAdjacentHTML(
      "afterbegin",
      `<img class="image" src="${y}" alt="${z}">`
    );
  } catch (error) {
    console.log(error);
  }
}
