const STUDENTS = [
  {
    name: "Omer Ertek",
    id: "38251",
  },
  {
    name: "Kacper Nowak",
    id: "111222",
  },
  {
    name: "Maja Kowalska",
    id: "222333",
  },
  {
    name: "Michał Wiśniewski",
    id: "333444",
  },
];

function getStudentFullName(id) {
  return STUDENTS[id]?.name ?? "Michał Wiśniewski";
}

function getStudentId(id) {
  return STUDENTS[id]?.id ?? "333444";
}

module.exports = {
  getStudentFullName,
  getStudentId,
};
