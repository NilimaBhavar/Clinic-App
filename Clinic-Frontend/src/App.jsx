import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Booking from "./Components/Booking";
import About from "./Components/About";
import Treatment from "./Components/Treatment";
import Team from "./Components/Team";
import Client from "./Components/Client";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Adddoctor from "./Components/Adddoctor";
import AddPatient from "./Components/AddPatient";
import AddReceptionist from "./Components/AddRecptionist";
import DoctorList from "./Components/DoctorList";



export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/team" element={<Team />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login"element={<Login/>}/>
        <Route path="/dashboard"element={<Dashboard/>}/>
        <Route path="/adddoctor"element={<Adddoctor/>}/>
        <Route path="/addpatient"element={<AddPatient/>}/>
        <Route path="/addrecptionist"element={<AddReceptionist/>}/>
        <Route path="/viewdoctors"element={<DoctorList/>}/>


      </Routes>

      <Footer />
    </>
  );
}
