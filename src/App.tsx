import "./App.css";
import { Nav } from "./components/nav/Nav";
import { EmployeeList } from "./components/employee-list/EmployeeList";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/Header";
import { Organization } from "./components/organization-list/organization"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import EmployeeForm from "./components/employee-list/EmployeeForm";


function App() {
  return (
    <Router>
      <Nav />
      <Header />

      <Routes>
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/employeeform" element={<EmployeeForm />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
