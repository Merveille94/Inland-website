function toggleCard(cardId) {
    var cards = document.querySelectorAll('.card-container');
    cards.forEach(function(card) {
      if (card.id === cardId) {
        if (card.style.display === 'block') {
          card.style.display = 'none';
        } else {
          card.style.display = 'block';
        }
      } else {
        card.style.display = 'none';
      }
    });
  }