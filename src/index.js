import "./styles.css";
import { homePage } from "./home.js";
import { aboutPage } from "./about.js";
import { menuPage } from "./menu.js";

homePage();

const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", homePage);

const aboutBtn = document.querySelector("#about-btn");
aboutBtn.addEventListener("click", aboutPage);

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", menuPage);

console.log("What Up, Jarvis?");