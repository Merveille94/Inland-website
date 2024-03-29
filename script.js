function toggleCard(cardId, element) {
  var cards = document.querySelectorAll(".card-container");
  cards.forEach(function (card) {
    if (card.id === cardId) {
      if (card.style.display === "block") {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    } else {
      card.style.display = "none";
    }
  });
  // Remove 'active' class from all elements
  var allGalleryImgs = document.querySelectorAll(".gallery-img");
  allGalleryImgs.forEach(function (el) {
    el.classList.remove("active1");
  });

  element.classList.toggle("active1");
}
