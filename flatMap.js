const tab = [
  { name: "Alice", age: 19 },
  { name: "Bob" },
  { name: "Charlie", brother: "bob" },
];

const findAllAttributes = (tab) => {
  return tab.map((student) => {
    return Object.keys(student);
  });
};

console.table(findAllAttributes(tab)); // ["name", "age"], ["name"], ["name", "brother"]

const allHeaders = findAllAttributes(tab);

// Using reduce to flatten the array of arrays
const flattenedHeaders = allHeaders.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattenedHeaders); // ["name", "age", "name", "name", "brother"]

const findAllAttributesFlat = (tab) => {
  return tab.flatMap((student) => {
    return Object.keys(student);
  });
};

console.table(new Set(findAllAttributesFlat(tab))); // ["name", "age", "name", "name", "brother"]

const head = Array.from(
  tab.reduce((acc, student) => {
    Object.keys(student).forEach((key) => acc.add(key));
    return acc;
  }, new Set())
);

console.log(head); // ["name", "age", "brother"]

const headers = Array.from(
  new Set(tab.flatMap((student) => Object.keys(student)))
);

console.log(headers); // ["name", "age", "brother"]
