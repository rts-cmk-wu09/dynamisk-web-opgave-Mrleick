let header = document.querySelector(".hero");
let service = document.querySelector(".services")




let words = hero.headline.split(" ");
// Loop through the words and add HTML elements with the desired style
for (var i = 0; i < words.length; i++) {
  if (i === 5 || i === 6 || i === 7) {
    words[i] = "<span style='color: rgba(247, 128, 101, 1);'>" + words[i] + "</span>";
  }
}
// Join the words back together into a single string
var modifiedHeadline = words.join(" ");

header.innerHTML = `
<img class="heroimg" src="${hero.image}" alt="woman in a red shirt">

    <div class="herobox">
     <h1 class="herobox__headline">${modifiedHeadline}</h1>
     <p class="herobox__copy">${hero.copy}</p>
     <button class="herobox__button"><img class="herobox__icon" src="${hero.icon}" alt="Imag"><p class="herobox__p">Explore</p></button>
    </div>
  `;

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

/*  */
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