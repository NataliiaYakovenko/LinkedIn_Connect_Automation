console.log("[LinkedIn] content script завантажено");

function findPeopleCards() {
  return document.querySelectorAll('div[role="listitem"]');
}

function findConnectButton(card) {
  return card.querySelector('[aria-label*="to connect"]');
}

setTimeout(() => {
  const cards = findPeopleCards();
  console.log(`[LinkedIn] знайдено карток: ${cards.length}`);

  cards.forEach((card, index) => {
    const button = findConnectButton(card);
    console.log(
      `[LinkedIn] картка ${index}: кнопка Connect ${button ? "знайдена" : "НЕ знайдена"}`,
    );
  });
}, 2000);