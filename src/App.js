import "./App.css";
import AllStudents from "./components/AllStudents";
import Title from "./components/Title";
import { Router } from "@reach/router";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <AllStudents path="/" />
        <Student path="/:studentId" />
      </Router>
    </div>
  );
}

export default App;
