import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/Global.css";
import UpdateJob from "./Pages/UpdateJob";
import JobDetailPage from "./Pages/JobDetailsPage";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import JobList from "./Pages/JobList";
import Footer from "./components/Footer";
import AboutUs from "./Pages/AboutUs";
import JobForm from "./components/JobForm";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {<Route path="/jobs" element={<JobList />} />}
        <Route path="/jobs/new" element={<JobForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/jobs/:jobId/Update" element={<UpdateJob />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
