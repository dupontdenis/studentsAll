import students from "./students.mjs";

export function filterStudentsWithLowMarks(students) {
  return students.filter((student) => student.marks.some((mark) => mark < 7));
}

// Example usage
const studentsWithLowMarks = filterStudentsWithLowMarks(students);
console.table(studentsWithLowMarks);
