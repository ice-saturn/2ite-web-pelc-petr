const titles = {
    en: "Bunnies",
    cs: "Králíci"
};

function setLang(lang) {
    // Hide all language elements
    document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');

    // Show selected language elements
    document.querySelectorAll('.lang-' + lang).forEach(el => el.style.display = 'inline');

    // Change the browser tab title
    document.title = titles[lang];
}

// default language
setLang('en');

function setCursor(type) {
  document.body.classList.remove('pointer-cursor', 'not-allowed-cursor');

  if (type === 'pointer') {
    document.body.classList.add('pointer-cursor');
  } else if (type === 'not-allowed') {
    document.body.classList.add('not-allowed-cursor');
  }
}