let answers = null;

async function loadAnswers() {
  const resp = await fetch("http://localhost:3000/");
  const json = await resp.json();
  answers = json;
}

const nameInput = document.querySelector("#name");
const questInput = document.querySelector("#quest");
const colorInput = document.querySelector("#color");

let name = "";
let quest = "";
let color = "";

nameInput.addEventListener("change", (ev) => {
  name = ev.target.value;
});
questInput.addEventListener("change", (ev) => {
  quest = ev.target.value;
});
colorInput.addEventListener("change", (ev) => {
  color = ev.target.value;
});

const output = document.querySelector("#output");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await loadAnswers();

  if (
    answers.name === name &&
    answers.quest === quest &&
    answers.favoriteColor === color
  ) {
    output.textContent = "You may continue";
  } else {
    output.textContent = "Passage denied";
  }
});
