import './App.css';
import { Router } from '@reach/router';

import StudentList from './components/StudentList/StudentList';
import Title from './components/Title/Title';
import Student from './components/Student/Student';

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <StudentList path="/" />
        <Student path="/:studentId" />
      </Router>
    </div>
  );
}

export default App;
