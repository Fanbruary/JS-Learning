/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Animal from "./Animal.js";
import Human from "./Human.js";
import Backpack from "./Backpack.js";

const animal = new Animal("cat", 3, "male", "maisui");

const human = new Human(
  "male",
  "asian",
  24,
  ["table tennis", "basketball", "swimming"],
  "none"
);

const backpack = new Backpack("balang", 24, "black", 2, 12, 14, true);

console.log("Animal_one: ", animal);
console.log("Human_one: ", human);
console.log("Backpack: ", backpack);

console.log("lid status: ", backpack.lidOpen);
console.log("human age: ", human.age);
console.log("animal age: ", animal.age);

backpack.toggleLid(false);
human.change_age(9999);
animal.increase_age(10);

console.log("lid status: ", backpack.lidOpen);
console.log("human age: ", human.age);
console.log("animal age: ", animal.age);
