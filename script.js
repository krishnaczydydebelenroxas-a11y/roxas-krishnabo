// Created by AMIT


// © AMIT 

document.addEventListener("DOMContentLoaded", (gojo) => {
  const questionContainer = document.querySelector(".question-container");
  const resultContainer = document.querySelector(".result-container");
  const gifResult = document.querySelector(".gif-result");
  const heartLoader = document.querySelector(".cssload-main");
  const yesBtn = document.querySelector(".js-yes-btn");
  const noBtn = document.querySelector(".js-no-btn");
  const cute = document.querySelector(".local-gif");
  
cute.addEventListener("canplaythrough", () => {
  cute.style.visibility = "visible";
});
function moveButton(e) {

    const newX = Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth);
    const newY = Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }

  noBtn.addEventListener("mouseenter", moveButton);
  noBtn.addEventListener("touchstart", moveButton, { passive: false });

  yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "block";

    setTimeout(() => {
      heartLoader.style.display = "none";
      resultContainer.style.display = "block";
      gifResult.play();
    }, 3000);
  });
});