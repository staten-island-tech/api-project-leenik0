import "/css/style.css";
import { img, API } from "./consts";

const button1 = document.getElementById("chara");
const button2 = document.getElementById("nations");
const button3 = document.getElementById("enemies");
const buttons = document.querySelectorAll(".button");
const text = document.getElementById("quote");

buttons.forEach((button) => button.addEventListener("click", whalen));

function whalen(e) {
  if (e.target === button1) {
    getData(API.characters, img.character, img.characteralt);
  } else if (e.target === button2) {
    getData(API.nations, img.nations, img.nationsalt);
  } else if (e.target === button3) {
    getData(API.enemy, img.enemies, img.enemiesalt);
  } else {
    text.innerHTML = "";
  }
}

async function getData(x, y, z) {
  try {
    text.innerHTML = "";
    const response1 = await fetch(x);
    const data1 = await response1.json();
    data1.forEach((x) => text.insertAdjacentHTML("beforeend", `<h2>${x}</h2>`));
    text.insertAdjacentHTML(
      "afterbegin",
      `<img class="image" src="${y}" alt="${z}">`
    );
  } catch (error) {
    console.log(error);
  }
}
