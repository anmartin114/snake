"use strict";

let cells = document.querySelectorAll(".cell");
cells[Math.floor(Math.random() * 16)].id = "it";

document.querySelector("section").addEventListener("click", clicked);

function clicked(event) {
  if (event.target.classList.contains("cell"))
    if (event.target.id === "it") {
      event.target.classList.toggle("red");
      console.log("red");
      document.getElementById("over").style.display = "flex";
      for (const cell of cells) {
        if (cell.classList.contains("green")) {
          cell.classList.toggle("yellow");
        }
      }
      document.querySelector("section").removeEventListener("click", clicked);
    } else {
      event.target.classList.toggle("green");
    }
}
