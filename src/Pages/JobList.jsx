import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader, Alert, Card, Title, Text, List, Anchor } from "@mantine/core";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/jobs`
        );
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

  if (loading)
    return (
      <div className="loader-container">
        <Loader size="xl" variant="bars" />
      </div>
    );

  if (error)
    return (
      <Alert title="Error" color="red" withCloseButton className="error-alert">
        {error}
      </Alert>
    );

  return (
    <>
      <Title align="center" mb="lg" className="title">
        Job App Tracker
      </Title>
      <List spacing="sm" size="sm" type="unordered" className="job-list">
        {jobs.map((job) => (
          <List.Item key={job.id} className="job-list-item">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="job-card"
            >
              <Anchor
                component={Link}
                to={`/job/${job.id}`}
                className="job-link"
              >
                <Text weight={500}>{job.company}</Text>
              </Anchor>
            </Card>
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default JobList;
