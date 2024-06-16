function appendValue(value) {
  const display = document.getElementById("display");
  display.value += value;
  animateButton(value);
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function animateButton(value) {
  const buttons = document.querySelectorAll('input[type="button"]');
  buttons.forEach((button) => {
    if (button.value === value) {
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.remove("pressed");
      }, 150);
    }
  });
}
