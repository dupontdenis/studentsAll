export function generateCard(student) {
  console.log(student);
  let cardClass = "card mb-4 shadow-sm";

  if (student.averageMarks < 10) {
    cardClass += " bg-danger text-white";
  } else if (student.ceil) {
    cardClass += " bg-warning text-white";
  }
  return `
  <div class="col-lg-2 col-md-4 col-sm-6">
      <div class="${cardClass}">
        <img src="${student.img}" class="card-img-top" alt="${student.name}">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">Marks: ${student.marks.join(", ")}</p>
          <p class="card-text">Average Mark: ${student.averageMarks}</p>
        </div>
      </div>
    </div>
  `;
}
