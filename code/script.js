const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Scientific functions
function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function powerTwo() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = "Error";
  }
}

function calculateSin() {
  display.value = Math.sin((eval(display.value) * Math.PI) / 180).toFixed(4);
}

function calculateCos() {
  display.value = Math.cos((eval(display.value) * Math.PI) / 180).toFixed(4);
}

function calculateTan() {
  display.value = Math.tan((eval(display.value) * Math.PI) / 180).toFixed(4);
}

function calculateLog() {
  display.value = Math.log10(eval(display.value)).toFixed(4);
}