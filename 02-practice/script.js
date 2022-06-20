// function to register a new student
let tests = [
  {
    stdId: 1234,
    score: 62,
  },
  {
    stdId: 4321,
    score: 45,
  },
];
let registeredStudents = [];

function studentAprovedTest(id) {
  for (let i = 0; i < tests.length; i++) {
    currentStudent = tests[i];
    if (currentStudent.stdId === id) {
      if (currentStudent.score >= 51) {
        return true;
      }
    }
  }
  return false;
}

function registerNewStudent(newStudent) {
  let stdId = newStudent.id;
  if (studentAprovedTest(stdId)) {
    console.log("yes");
    registeredStudents.push(newStudent);
  } else {
    console.log(`Sorry but ${newStudent.name} not approved the test`);
  }
}

const newStudent = {
  id: 1234,
  name: "Jose",
  lastName: "Santos",
  age: 14,
};

const newStudent2 = {
  id: 4321,
  name: "Jaimito",
  lastName: "ThePostman",
  age: 14,
};

registerNewStudent(newStudent);
registerNewStudent(newStudent2);
