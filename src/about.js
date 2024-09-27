import tonyStarkImage from "./imgs/TonyStark.jpg";

export const aboutPage = function() {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";

    const paragraph1Element = document.createElement("p");
    paragraph1Element.textContent = "Stark's Diner is a futuristic dining experience that blends the sleek, modern aesthetic of Tony Stark's world with the warm, inviting atmosphere of a classic American diner. The interior features walls adorned with Stark Industries logos and holographic displays, showcasing the latest technological advancements. Comfortable, stylish furniture combines chrome and leather accents, creating a luxurious yet casual ambiance. Bright, inviting lighting includes spotlights and neon signs, adding to the futuristic and energetic vibe. Overall, Stark's Diner offers a unique and unforgettable dining experience.";
    contentContainer.appendChild(paragraph1Element);

    const imageElement = document.createElement("img");
    imageElement.src = tonyStarkImage;
    contentContainer.appendChild(imageElement);

    const paragraph2Element = document.createElement("p");
    paragraph2Element.textContent = "Tony Stark, the brilliant billionaire philanthropist and genius inventor, is the driving force behind Stark Industries. With his unmatched intellect and innovative spirit, Tony has revolutionized technology and pushed the boundaries of what is possible. Known for his charismatic personality, unwavering determination, and often-flamboyant lifestyle, Tony has become a global icon. His journey from playboy industrialist to superhero has captivated audiences worldwide, inspiring millions with his resilience, courage, and unwavering commitment to protecting the innocent.";
    contentContainer.appendChild(paragraph2Element);
};