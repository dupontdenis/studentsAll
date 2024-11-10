import students from "./students.mjs";
import { calculateAverageMarks } from "./averageMarks.mjs";

export function markHighAverageStudents(students) {
  const studentsWithAverage = calculateAverageMarks(students);

  return studentsWithAverage.map((student) => {
    const hasHighAverage = student.averageMarks >= 10;
    if (hasHighAverage) {
      return { ...student, L3: true };
    }
    return student;
  });
}

// Example usage
const studentsWithHighAverage = markHighAverageStudents(students);
console.table(studentsWithHighAverage);
