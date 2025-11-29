import "./App.css";
import { Nav } from "./components/nav/Nav";
import { EmployeeList } from "./components/employee-list/EmployeeList";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/Header";
import { Organization } from "./components/organization-list/organization"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import EmployeeForm from "./components/employee-list/EmployeeForm";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  RedirectToSignIn
} from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <Nav />
      <Header />

      <div style={{ padding: "20px" }}>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <Routes>
        <Route
          path="/employees"
          element={
            <SignedIn>
              <EmployeeList />
            </SignedIn>
          }
        />

        <Route
          path="/organization"
          element={
            <SignedIn>
              <Organization />
            </SignedIn>
          }
        />

        <Route
          path="/employeeform"
          element={
            <SignedIn>
              <EmployeeForm />
            </SignedIn>
          }
        />

        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
