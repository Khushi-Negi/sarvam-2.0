import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Frontend/MainPage";
import LoginPage from "./Frontend/LoginPage";
import StudentLoginPage from "./Frontend/StudentLogin";
import FacultyLoginPage from "./Frontend/FacultyLogin";
import RegistrationEntryPage from "./Frontend/RegistrationEntryPage";
import TeacherDetailsForm from "./Frontend/timetable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/StudentLoginPage" element={<StudentLoginPage />} />
        <Route path="/FacultyLoginPage" element={<FacultyLoginPage />} />
        <Route path="/RegistrationEntryPage" element={<RegistrationEntryPage />}/>
        <Route path="/TeacherDetailsForm" element={<TeacherDetailsForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
