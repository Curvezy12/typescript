// Import stylesheets
// import './style.css';

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const Output: HTMLElement = document.getElementById('Output');
const Button: HTMLElement = document.getElementById('Button');
Button.addEventListener('click', fizzbuzz);

function fizzbuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      Output.innerHTML += '<div>FizzBuzz ' + i + '</div>';
      //console.log('FizzBuzz, i);
    } else if (i % 5 == 0) {
      Output.innerHTML += '<div>Buzz ' + i + '</div>';
      //console.log('Buzz', i);
    } else if (i % 3 == 0) {
      Output.innerHTML += '<div>Fizz ' + i + '</div>';
      //console.log('Fizz', i);
    }
  }
}
