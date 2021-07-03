/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let temp = ["phone", "mouse", "water bottle", "pc", "ayikes"];
console.log("Array: ", temp);

let last_item = temp.pop();
temp.unshift(last_item);
temp.sort();

var to_be_deleted;
temp.forEach((element) => {
  if (element == "mouse") {
    to_be_deleted = element;
    console.log("Removed element: ", to_be_deleted);
  }
});

for (var i = 0; i < temp.length; i++) {
  if (temp[i] == to_be_deleted) {
    temp.splice(i, 1);
  }
}
console.log("Array: ", temp);
