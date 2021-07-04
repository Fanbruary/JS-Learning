/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
// import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

const content_creater = function (backpack_object) {
  return `
    <figure class="backpack__image">
      <img src=${backpack_object.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpack_object.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpack_object.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpack_object.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpack_object.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpack_object.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack_object.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack_object.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack_object.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;
};

const backpack_articles = backpackObjectArray.map((backpack) => {
  let article = document.createElement("article");
  article.classList.add("backpack");
  article.setAttribute("id", backpack.id);
  article.innerHTML = content_creater(backpack);
  return article;
});

const main = document.querySelector(".maincontent");

backpack_articles.forEach((article_object) => {
  main.append(article_object);
});

// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

// main.append(newArticle);
