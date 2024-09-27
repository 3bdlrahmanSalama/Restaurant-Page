import number01Image from "./imgs/Number01.jpg";
import number02Image from "./imgs/Number02.jpg";
import number03Image from "./imgs/Number03.jpg";
import number04Image from "./imgs/Number04.jpg";

export const menuPage = function() {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";

    // Number 01

    const number01Card = document.createElement("div");
    number01Card.classList.add("meal-card");
    contentContainer.appendChild(number01Card);

    const number01ImgEl = document.createElement("img");
    number01ImgEl.src = number01Image;
    number01ImgEl.alt = "Thor's Hammer Burger";
    number01Card.appendChild(number01ImgEl);

    const number01InnerCard = document.createElement("div");
    number01InnerCard.classList.add("inner-card");
    number01Card.appendChild(number01InnerCard);

    const number01H2El = document.createElement("h2");
    number01H2El.textContent = "Thor's Hammer Burger";
    number01InnerCard.appendChild(number01H2El);

    const number01PEl = document.createElement("p");
    number01PEl.textContent = "A towering burger with bacon, cheese, and avocado, served on a brioche bun with fries.";
    number01InnerCard.appendChild(number01PEl);

    // Number 02

    const number02Card = document.createElement("div");
    number02Card.classList.add("meal-card");
    contentContainer.appendChild(number02Card);

    const number02ImgEl = document.createElement("img");
    number02ImgEl.src = number02Image;
    number02ImgEl.alt = "Captain America's Shield Steak";
    number02Card.appendChild(number02ImgEl);

    const number02InnerCard = document.createElement("div");
    number02InnerCard.classList.add("inner-card");
    number02Card.appendChild(number02InnerCard);

    const number02H2El = document.createElement("h2");
    number02H2El.textContent = "Captain America's Shield Steak";
    number02InnerCard.appendChild(number02H2El);

    const number02PEl = document.createElement("p");
    number02PEl.textContent = "A juicy steak cooked to your liking, served with roasted vegetables and mashed potatoes.";
    number02InnerCard.appendChild(number02PEl);

    // Number 03

    const number03Card = document.createElement("div");
    number03Card.classList.add("meal-card");
    contentContainer.appendChild(number03Card);

    const number03ImgEl = document.createElement("img");
    number03ImgEl.src = number03Image;
    number03ImgEl.alt = "Hulk Smash Chocolate Cake";
    number03Card.appendChild(number03ImgEl);

    const number03InnerCard = document.createElement("div");
    number03InnerCard.classList.add("inner-card");
    number03Card.appendChild(number03InnerCard);

    const number03H2El = document.createElement("h2");
    number03H2El.textContent = "Hulk Smash Chocolate Cake";
    number03InnerCard.appendChild(number03H2El);

    const number03PEl = document.createElement("p");
    number03PEl.textContent = "A decadent chocolate cake with a layer of green velvet cake and vanilla buttercream frosting.";
    number03InnerCard.appendChild(number03PEl);

    // Number 04

    const number04Card = document.createElement("div");
    number04Card.classList.add("meal-card");
    contentContainer.appendChild(number04Card);

    const number04ImgEl = document.createElement("img");
    number04ImgEl.src = number04Image;
    number04ImgEl.alt = "Stark's Energy Elixir";
    number04Card.appendChild(number04ImgEl);

    const number04InnerCard = document.createElement("div");
    number04InnerCard.classList.add("inner-card");
    number04Card.appendChild(number04InnerCard);

    const number04H2El = document.createElement("h2");
    number04H2El.textContent = "Stark's Energy Elixir";
    number04InnerCard.appendChild(number04H2El);

    const number04PEl = document.createElement("p");
    number04PEl.textContent = "A refreshing and energizing drink with a hint of citrus.";
    number04InnerCard.appendChild(number04PEl);
};