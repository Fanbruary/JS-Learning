/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  [new Book("GOT", "MT", 2010, "ENG", "Fiction")]
);

const harry_potter = new Book("HarryPotter", "JK Rollin", 2001, "ENG", "Magic");
const sanguoyanyi = new Book(
  "Sanguoyanyi",
  "Guanzhong Luo",
  1523,
  "CHN",
  "History"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log("The book inside", everydayPack.books);

everydayPack.add_book(harry_potter);
everydayPack.add_book(sanguoyanyi);

console.log("The book inside", everydayPack.books);
