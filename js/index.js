let header = document.querySelector(".hero");




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
     <button class="herobox__button">Explore</button>
    </div>
  `; 

  