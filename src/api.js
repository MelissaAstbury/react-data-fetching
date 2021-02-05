export const fetchAllStudents = () => {
  return fetch(
    'https://nc-student-tracker.herokuapp.com/api/students'
  ).then((res) => res.json());
};

export const fetchStudent = (studentId) => {
  return fetch(
    `https://nc-student-tracker.herokuapp.com/api/students/${studentId}`
  ).then((res) => res.json());
};
