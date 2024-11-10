import { generateCard } from "./card.mjs";

export function generateCards(students) {
  return students.map((student) => generateCard(student));
}
