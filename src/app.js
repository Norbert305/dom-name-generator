/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "a"];
  let adj = ["small", "big", "quick"];
  let noun = ["dragon", "shark", "mouse"];
  let site = [".com", ".net", ".git"];

  let mix = " ";

  for (var words of pronoun) {
    for (var action of adj) {
      for (var animals of noun) {
        for (var web of site) {
          document.querySelector("#stuff").innerHTML +=
            "<li>" + words + action + animals + web + "</li>";
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
