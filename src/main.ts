/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
  <button id="reset">Reset</button>
`;

// Grab our elements
const button = document.getElementById("increment")!;
const resetButton = document.getElementById("reset")!;
const counterElement = document.getElementById("counter")!;

function updateCounterDisplay(): void {
  counterElement.textContent = String(counter);
}

button.addEventListener("click", () => {
  counter++;
  updateCounterDisplay();
  console.log("Counter incremented to:", counter);
});

resetButton.addEventListener("click", () => {
  counter = 0;
  updateCounterDisplay();
  console.log("Counter reset to:", counter);
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.code === "Space") {
    event.preventDefault();
    button.click();
  }
});
