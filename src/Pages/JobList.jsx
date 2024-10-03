import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Loader,
  Alert,
  Card,
  Title,
  Text,
  List,
  Anchor,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleCreate = () => {
    navigate("/jobs/new");
  };

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
      <Group position="apart" mb="lg">
        <Title align="center" className="title">
          Job App Tracker
        </Title>
        <Button onClick={handleCreate} variant="outline">
          Create New Job
        </Button>
      </Group>
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
