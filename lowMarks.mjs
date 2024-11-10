import students from "./students.mjs";
import { calculateAverageMarks } from "./averageMarks.mjs";

export function filterLowAverageStudents(students) {
  const studentsWithAverage = calculateAverageMarks(students);
  return studentsWithAverage.filter((student) => student.averageMarks < 10);
}

// Example usage
const studentsWithLowAverage = filterLowAverageStudents(students);
console.table(studentsWithLowAverage);
