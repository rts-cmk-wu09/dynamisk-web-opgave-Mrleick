
let words = hero.headline.split(" ");

for (var i = 0; i < words.length; i++) {
  if (i === 5 || i === 6 || i === 7) {
    words[i] = "<span style='color: rgba(247, 128, 101, 1);'>" + words[i] + "</span>";
  }
}

var modifiedHeadline = words.join(" ");

    <div class="herobox">
     <h1 class="herobox__headline">${modifiedHeadline}</h1>
     <p class="herobox__copy">${hero.copy}</p>
     <button class="herobox__button"><img class="herobox__icon" src="${hero.icon}" alt="Imag"><p class="herobox__p">Explore</p></button>
    </div>
  `;

/* Services */
let servicesContainer = document.querySelector(".services");

for (let i = 0; i < services.length; i++) {
  let service = services[i];
  let article = document.createElement("article");
  article.classList.add("servicebox");
  article.innerHTML = `
          <img src="${service.illustration}" alt="Illustration for ${service.headline}">
          <h2 class="servicebox__header">${service.headline}</h2>
          <p class=" servicebox__text">${service.text}</p>
          <a class="servicebox__link" href="#">${service.linktext}</a>
      `;

  servicesContainer.appendChild(article);
}

/* Facilities */
let container = document.querySelector('.facilities');
let articleHTML = `
  <h2 class="facilities-headline">${facilities.headline}</h2>
`;
for (let i = 0; i < facilities.options.length; i++) {
  let option = facilities.options[i];
  articleHTML += `  
          <article class="facility">
            <img src="${option.icon}" alt="">
            <h3 class="facility__header">${option.headline}</h3>
            <p class="facility__text">${option.text}</p>
            <a class="facility__link" href="#">Show me more</a>
          </article>
        `;
}

container.innerHTML = articleHTML;

/* Sites */
let sitecontainer = document.querySelector('.sites');
let siteHTML = ` 
  <div class="sites__box">
  <h2 class="sites__title">${sites.headline}</h2>
  <p class="sites__des">${sites.text}</p>
  <button class="sites__button"><img class="sites__icon" src="${sites.btnicon}" alt="Imag"><p class="sites__btnp">Start</p></button>
  </div>
`;
for (let i = 0; i < sites.places.length; i++) {
  let places = sites.places[i];
  siteHTML += `  
          <article class="sitebox">
            <img class="sitebox__img" src="${places.img}" alt="">
            <p class="sites__name">${places.name}</p>
            <p class="sites_city">${places.city}</p>
            <a class="sites__link" href="#">View the site</a>
          </article>
        `;
}


sitecontainer.innerHTML = siteHTML;

/* advantages */
let advantagecontainer = document.querySelector('.advantages');
let advantageHTML = `
  <h2 class="advantages__title">Our advantages</h2>
  
`;
for (let i = 0; i < advantages.length; i++) {
  let advantage = advantages[i];
  advantageHTML += `  
          <article class="advantages__article">
          <img class="advantages__icon" src="${advantage.icon}" alt="">
            <h3 class="advantages__headline">${advantage.headline}</h3>
            <p class="advantages__p">${advantage.text}</p>
          </article>
        `;
}
advantagecontainer.innerHTML = advantageHTML;

/* Footer */
let footercontainer = document.querySelector('footer');
let footerHTML = `
  <div class="footer__box">
  <h3 class="footer__title">${footer.headline}</h3>
  <h2 class="footer__text">${footer.text}</h2>
  </div>
`;
for (let i = 0; i < footer.become.length; i++) {
  let become = footer.become[i];
  let numLinks = i == 1 ? 3 : 4;
  let linkHTML = '';
  for (let j = 1; j <= numLinks; j++) {
    linkHTML += `<a class="footer__link" href="#">${become['p'+j]}</a>`;
  }
  footerHTML += `  
    <article class="footer__article">
      <h3 class="footer__headline">${become.headline}</h3>
      ${linkHTML}
    </article>
  `;
}


footerHTML += `
  <hr>
  <p class="footer__copy">EazyCamper. All rights reserved. </p>
  <div class="footer__links">
    <a class="footer__a" href="#">About</a>
    <a class="footer__a" href="#">Site Map</a>
    <a class="footer__a" href="#">Terms</a>
    <a class="footer__a" href="#">Privacy Police</a>
    <a class="footer__a" href="#">Teams</a>
  </div>
`;


footercontainer.innerHTML = footerHTML;
