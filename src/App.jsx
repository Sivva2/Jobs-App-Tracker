<<<<<<< HEAD
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {<Route path="/jobs" element={<JobList />} />}
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:jobId" element={<JobDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/job/:jobId/Update" element={<UpdateJob />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
=======
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/Global.css";
import UpdateJob from "./Pages/UpdateJob";
import JobDetailPage from "./Pages/JobDetailsPage";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import JobList from "./Pages/JobList";
import Footer from "./components/Footer";
import JobForm from "./components/JobForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {<Route path="/jobs" element={<JobList />} />}
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/new" element={<JobForm />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/jobs/:jobId/Update" element={<UpdateJob />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
>>>>>>> 7c164f6dd269f742fc84893cec0fa0a73ccae75d
