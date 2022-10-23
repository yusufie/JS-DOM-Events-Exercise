// when click the buttons increase size of the text
const eyes = document.getElementById("👀");
const increaseButton = document.getElementById("increase");

increaseButton.addEventListener("click", () => {
  let currFontSize = parseInt(window.getComputedStyle(eyes).fontSize);
  eyes.style.fontSize = currFontSize + 10 + "px";
});


// when click the buttons decrease size of the text
const decreaseButton = document.getElementById("decrease");

decreaseButton.addEventListener("click", () => {
  let currFontSize = parseInt(window.getComputedStyle(eyes).fontSize);
  eyes.style.fontSize = currFontSize - 10 + "px";
});


// when mouse over the box change the background color to green
const greenBox = document.getElementById("greenBackground");

greenBox.addEventListener("mouseover", () => {
  greenBox.style.backgroundColor = "green";

  greenBox.addEventListener("mouseout", () => {
    greenBox.style.backgroundColor = "white";
  });
});


// when mouse over the box change the text color to black
const purpleText = document.getElementById("purpleColor");

purpleText.addEventListener("mouseout", () => {
  purpleText.style.color = "purple";

  purpleText.addEventListener("mouseover", () => {
    purpleText.style.color = "black";
  });
});


// when whatever you type in the input box, it will show up instead of the default text
const resetInput = document.getElementById("reset");

resetInput.addEventListener("input", () => {
  eyes.innerText = resetInput.value;
});


// when click the button change the text to the default value
const resetButton = document.getElementById("reset-submit");

resetButton.addEventListener("click", () => {
  resetInput.value = "";
});


// whatever you type in the input box, it will show up an alert message when you click the button
const alertInput = document.getElementById("alert");
const alertButton = document.getElementById("alert-submit");

alertButton.addEventListener("click", () => {
  alert(alertInput.value);
});



 




