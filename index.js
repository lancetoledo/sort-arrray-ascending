// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//sort an array with numbers that are in a random order into ascending order

let arr = [1, 9, 4, 8, 3, 4, 0, 7, 2];
let temp = 0;

function sort(array) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i]) {
      } else if (array[j] > array[i]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(sort(arr));
