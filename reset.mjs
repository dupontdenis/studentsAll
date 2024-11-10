import { displayStudents } from "./studentDisplay.mjs";

export function setupResetButton(students) {
  document.getElementById("reset").addEventListener("click", () => {
    displayStudents(students);
  });
}
