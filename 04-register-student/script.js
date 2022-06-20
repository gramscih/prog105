let idElem = document.querySelector(".opt-id");
let nameElem = document.querySelector(".opt-name");
let lastNameElem = document.querySelector(".opt-last-name");
let courseElem = document.querySelector(".opt-course");

let saveHandler = document.querySelector(".btn");

let successElem = document.querySelector(".success-msg");
let errorElem = document.querySelector(".error-msg");

let tests = [
  {
    id: 1234,
    score: 62,
  },
  {
    id: 4321,
    score: 20,
  },
];
let students = [];

function approved(id) {
  for (let i = 0; i < tests.length; i++) {
    if (tests[i].id == id) {
      if (tests[i].score >= 51) {
        return true;
      }
    }
  }
  return false;
}

function savedSuccess(studentName) {
  let msg = `${studentName} Success fully saved.`;
  successElem.classList.remove("hidden");
  successElem.textContent = msg;
  //   console.log(successElem.classList);
}

function errorMessage(studentName) {
  errorElem.classList.remove("hidden");
  //   console.log("Error", studentName);
}

function saveData() {
  let id = idElem.value;
  let name = nameElem.value;
  let lastName = lastNameElem.value;
  let course = courseElem.options[courseElem.selectedIndex].text;

  if (approved(id)) {
    let student = { id: id, name: name, lastName: lastName, course: course };
    students.push(student);
    savedSuccess(name);
  } else {
    errorMessage(name);
  }
}

saveHandler.addEventListener("click", saveData);
