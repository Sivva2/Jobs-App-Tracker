import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
<<<<<<< Updated upstream
import "./styles/Global.css";
=======
>>>>>>> Stashed changes
import UpdateJob from "./Pages/UpdateJob";
import JobDetailPage from "./Pages/JobDetailsPage";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import JobList from "./Pages/JobList";
<<<<<<< Updated upstream
import Footer from "./components/Footer";
=======
import JobForm from "./components/JobForm";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {<Route path="/jobs" element={<JobList />} />}
        <Route path="/" element={<HomePage />} />
        <Route path="/job/new" element={<JobForm />} />
        <Route path="/job/:jobId" element={<JobDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/job/:jobId/Update" element={<UpdateJob />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
