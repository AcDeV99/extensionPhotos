const divs = Array.from(document.querySelectorAll('div'));
chrome.storage.local.get(['image'], async function (result) {
  if (result.image) {
    divs.forEach((div) => {
      div.style.backgroundImage = `url(${result.image})`;
      div.style.backgroundSize = '100%';
    });
  }
});
