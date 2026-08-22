console.log("[LinkedIn] content script завантажено");

function findPeopleCards() {
  return document.querySelectorAll('div[role="listitem"]');
}

const cards = findPeopleCards();
console.log(`[LinkedIn] знайдено карток: ${cards.length}`);
