import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/job");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Job App Tracker</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link to={`/job/${job.id}`}>{job.company}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobList;
