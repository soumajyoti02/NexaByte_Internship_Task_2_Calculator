// Select the HTML element with id "display" and assign it to the variable "display"
const display = document.querySelector("#display");

// Select all HTML button elements and assign them to the variable "buttons"
const buttons = document.querySelectorAll("button");

// Loop through each button using forEach
buttons.forEach((item) => {
  // Add a click event handler for each button
  item.onclick = () => {
    // Check which button was clicked based on its "id" attribute
    if (item.id == "clear") {
      // If the "clear" button was clicked, clear the display
      display.innerText = "";
    } else if (item.id == "backspace") {
      // If the "backspace" button was clicked, remove the last character from the display
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      // If the "equal" button was clicked and the display is not empty, evaluate the expression and display the result
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      // If the "equal" button was clicked and the display is empty, show "Empty!" for 2 seconds
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      // For other buttons, append the button's "id" value to the display
      display.innerText += item.id;
    }
  };
});
