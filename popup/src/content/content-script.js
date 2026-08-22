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
    const state = resolveButtonState(card);
    console.log(`[LinkedIn] картка ${index}: стан = ${state}`);
  });
}, 2000);

function resolveButtonState(card) {
  const connectButton = card.querySelector('[aria-label*="to connect"]');
  if (connectButton) {
    return "connect";
  }

  const pendingButton = card.querySelector('[aria-label*="Pending"]');
  if (pendingButton) {
    return "pending";
  }

  const messageButton = card.querySelector('[aria-label*="Message"]');
  if (messageButton) {
    return "message";
  }

  return "unknown";
}
