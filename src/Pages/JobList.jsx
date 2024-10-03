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
import classes from "../styles/JobList.module.css";

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
      <div className={classes.loaderContainer}>
        <Loader size="xl" variant="bars" />
      </div>
    );

  if (error)
    return (
      <Alert
        title="Error"
        color="red"
        withCloseButton
        className={classes.errorAlert}
      >
        {error}
      </Alert>
    );

  return (
    <>
      <Group position="apart" mb="lg">
        <Title align="center" className={classes.title}>
          Job App Tracker
        </Title>
        <Button
          onClick={handleCreate}
          variant="outline"
          className={classes.button}
        >
          Create New Job
        </Button>
      </Group>
      <List spacing="sm" size="sm" type="unordered" className={classes.jobList}>
        {jobs.map((job) => (
          <List.Item key={job.id} className={classes.jobListItem}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className={classes.jobCard}
            >
              <Anchor
                component={Link}
                to={`/jobs/${job.id}`}
                className={classes.jobLink}
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
