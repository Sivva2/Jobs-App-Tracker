import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Loader, Button, Text } from "@mantine/core"; // Ensure you are importing correctly
import classes from "../styles/JobDetailPage.module.css"; // Ensure you have the correct path for your CSS

const JobDetailPage = () => {
  const [job, setJob] = useState(null);
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchJob = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/jobs/${jobId}`
      );
      setJob(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const remove = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/jobs/${jobId}`);
      navigate("/jobs");
    } catch (error) {
      console.error("Error removing the item:", error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [jobId]);

  if (loading)
    return <Loader size="xl" variant="bars" className={classes.loader} />;

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <Text className={classes.company} weight={700} size="xl">
          Company: {job.company}
        </Text>
        <Text className={classes.jobTitle} weight={500} size="lg">
          Job Title: {job.jobTitle}
        </Text>
        <Text className={classes.description}>
          Description: {job.description}
        </Text>
        <Text className={classes.dateApplied}>
          Date Applied: {job.dateApplied}
        </Text>
        <Text className={classes.status}>Status: {job.status}</Text>
        <Text className={classes.contact}>Contact: {job.contact}</Text>
        <Text className={classes.jobLink}>
          Job Link:
          <a href={job.jobLink} target="_blank" rel="noopener noreferrer">
            {job.jobLink}
          </a>
        </Text>
        <Text className={classes.notes}>Notes: {job.notes}</Text>

        <div className={classes.buttonGroup}>
          <Button onClick={remove} color="red" variant="outline">
            Delete
          </Button>
          <Link to={`/jobs/${jobId}/Update`}>
            <Button variant="outline">Update</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default JobDetailPage;
