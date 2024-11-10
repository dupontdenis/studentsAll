// Write a function that takes an array of students and returns an array of objects with the average marks of each student.
import students from "./students.mjs";

export function mcc(students) {
  return students.map((student) => {
    const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
    const averageMarks = (totalMarks / student.marks.length).toFixed(2);
    const ceil = student.marks.some((mark) => mark < 7) ? true : "";

    return { ...student, averageMarks, ceil };
  });
}

console.log(mcc(students));
