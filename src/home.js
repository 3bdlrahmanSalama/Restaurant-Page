import restaurantImage from "./imgs/StarksDiner.jpg";

export const homePage = function() {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";

    const imageElement = document.createElement("img");
    imageElement.src = restaurantImage;
    contentContainer.appendChild(imageElement);

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = "Stark's Diner is a futuristic dining experience that blends the sleek, modern aesthetic of Tony Stark's world with the warm, inviting atmosphere of a classic American diner. The interior features walls adorned with Stark Industries logos and holographic displays, showcasing the latest technological advancements. Comfortable, stylish furniture combines chrome and leather accents, creating a luxurious yet casual ambiance. Bright, inviting lighting includes spotlights and neon signs, adding to the futuristic and energetic vibe. Overall, Stark's Diner offers a unique and unforgettable dining experience.";
    contentContainer.appendChild(paragraphElement);
};