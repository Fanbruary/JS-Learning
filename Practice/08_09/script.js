/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  description: "THIS IS THE DESCRIPTION OF A FROG BAG",
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

// * - Main function
// *  - Creates new <article> element
// *  - Populates <article> with content (see const content below)
// *  - Returns <article> element to where function is called

const article_creater = function (backpack_obj) {
  let new_article = document.createElement("article");
  new_article.innerHTML = content;
  let bagpack_figure = figure_creater(backpack_obj);
  new_article.prepend(bagpack_figure);
  return new_article;
};

// * - Helper image function
// *  - Creates new <figure> element
// *  - Adds <img> markup pointing to frogpack.image
// *  - Adds <figcaption> element with image description
// *  - Returns <figure> element to where function is called

const figure_creater = function (backpack) {
  let new_figure = document.createElement("figure");
  let new_img = document.createElement("img");
  let new_figcaption = document.createElement("figcaption");
  new_img.setAttribute("src", frogpack.image);
  new_figcaption.innerText = frogpack.description;
  new_figure.append(new_img);
  new_figure.append(new_figcaption);
  return new_figure;
};

document.querySelector("main").append(article_creater(frogpack));
