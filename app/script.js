document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("interactive-btn");
  const featureCards = document.querySelectorAll(".feature-card");

  button.addEventListener("click", function () {
    alert(
      "Você clicou no botão! Esta interação é possível graças ao JavaScript."
    );
  });

  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    });
  });
});
