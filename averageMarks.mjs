// Write a function that takes an array of students and returns an array of objects with the average marks of each student.
import students from "./students.mjs";

// export function calculateAverageMarks(students) {
//   return students.map((student) => {
//     const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
//     const averageMarks = (totalMarks / student.marks.length).toFixed(2);
//     return { name: student.name, averageMarks };
//   });
// }

export function calculateAverageMarks(students) {
  return students
    .filter(student => student.marks && student.marks.length > 0) // Filter out students with no marks
    .map((student) => {
      const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
      const averageMarks = (totalMarks / student.marks.length).toFixed(2);
      return { name: student.name, averageMarks };
    });
}

console.log(calculateAverageMarks(students));
