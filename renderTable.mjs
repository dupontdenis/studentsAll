export function generateTableHTML(studentData) {
  if (studentData.length === 0) return "nothing to display";

  // Get all unique headers from the student data using reduce
  // const headers = Array.from(
  //   studentData.reduce((acc, student) => {
  //     Object.keys(student).forEach((key) => acc.add(key));
  //     return acc;
  //   }, new Set())
  // );

  // Get all unique headers from the student data using map and flat
  // const headers = Array.from(
  //   new Set(studentData.map((student) => Object.keys(student)).flat())
  // );

  // Get all unique headers from the student data
  const headers = Array.from(
    new Set(studentData.flatMap((student) => Object.keys(student)))
  );

  const tableHTML = `
    <table class="table table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          ${headers.map((header) => `<th>${header}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${studentData
          .map(
            (student) => `
            <tr class="${student.lowMark ? "table-danger" : ""}">
              ${headers
                .map((header) => {
                  if (header === "img") {
                    return `<td><img src="${student[header] || ""}" alt="${
                      student.name
                    }" style="width: 50px; height: 50px;" /></td>`;
                  }
                  return `<td>${
                    Array.isArray(student[header])
                      ? student[header].join(", ")
                      : student[header] !== undefined
                      ? student[header]
                      : ""
                  }</td>`;
                })
                .join("")}
            </tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;

  return tableHTML;
}
