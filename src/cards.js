const cards = document.querySelector("#cards");
const cardsNum = 5;

function createCardsContext() {
  for (let i = 0; i < cardsNum; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const h3 = document.createElement("h3");
    h3.textContent = "Why do we use it?";

    const h1 = document.createElement("h1");
    h1.textContent = "What is Lorem Ipsum?";

    const p = document.createElement("p");
    p.textContent =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer \
    took a galley of type and scrambled it to make a type specimen book. It has survived not \
    only five centuries, but also the leap into electronic typesetting, remaining essentially \
    unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not \
    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\
    industry's standard dummy text ever since the 1500s.";

    const buttonLaunch = document.createElement("button");
    buttonLaunch.textContent = "Launch";

    card.appendChild(h3);
    card.appendChild(h1);
    card.appendChild(p);
    card.appendChild(buttonLaunch);

    cards.appendChild(card);
  }
}

export { createCardsContext };
