/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const article_obj = {
  title: "Got",
  author: "MT",
  language: "Eng",
  date_published: "2002",
};
const page_content = document.querySelector("main");

function artical_creater(article) {
  const new_article = document.createElement("article");
  const article_content = `
    <ul>
      <li>title: ${article.title}</li>
      <li>author: ${article.author}</li>
      <li>language: ${article.language}</li>
      <li>date_published: ${article.date_published}</li>
    </ul>

    `;
  new_article.innerHTML = article_content;
  page_content.append(new_article);
}

const function_expression_tester = function () {
  const new_header = document.createElement("h1");
  const header_content = `Game of Throne:`;
  new_header.innerHTML = header_content;
  page_content.append(new_header);
};

var arrow_function_tester = () => {
  const new_header = document.createElement("h2");
  const header_content = `Game of Throne:`;
  new_header.innerHTML = header_content;
  page_content.append(new_header);
};
function_expression_tester();
arrow_function_tester();
artical_creater(article_obj);

document.querySelector("article").setAttribute("id", 1);
document.querySelector("article").setAttribute("class", "hash");

console.log("article attribute", document.querySelector("article").attributes);
