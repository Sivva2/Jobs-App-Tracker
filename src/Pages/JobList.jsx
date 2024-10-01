import { useState } from "react";

const JobList = () => {
  const [job, setJob] = useState();

  useEffect(() => {
    const fetchjob = async () => {
      const response = await fetch("http://localhost:4000/job");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setJob(data);
      }
    };

    fetchjob();
  }, []);

  return (
    <>
      <h1>Job App Tracker</h1>
      <ul>
        {job.map((job) => (
          <li key={job.id}>
            <Link to={`/job/${job.id}`}> {job.company} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobList;
