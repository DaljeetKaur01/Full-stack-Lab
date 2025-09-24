import "./App.css";
import { Nav } from "./components/nav/Nav";
import { EmployeeList } from "./components/employee-list/EmployeeList";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/Header";
import { Organization } from "./components/organization-list/organization"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 

function App() {
  return (
    <Router>
      <Nav />
      <Header />

      <Routes>
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/organization" element={<Organization />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
