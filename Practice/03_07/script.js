/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const qiangqiang = {
  name_en: "Aaron",
  age: 37,
  hobby: {
    sport: ["badmintin", "table tennis"],
    club: "church",
  },
  toggle_age: function (new_age) {
    this.age = new_age;
  },
};

console.log("The object qiangqiang: ", qiangqiang);
console.log("qiangqiang's name and age:", qiangqiang.name_en, qiangqiang.age);
console.log("qiangqiang's hobby: ", qiangqiang["hobby"]);
