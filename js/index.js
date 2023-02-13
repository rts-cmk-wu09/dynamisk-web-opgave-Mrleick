let header = document.querySelector(".hero");

header.innerHTML = `
<img class="heroimg" src="${hero.image}" alt="woman in a red shirt">

    <div class="herobox">
     <h1 class="herobox__headline">${hero.headline}</h1>
     <p class="herobox__copy">${hero.copy}</p>
    </div>
  `;