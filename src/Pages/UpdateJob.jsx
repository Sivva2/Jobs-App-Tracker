import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobForm from "../components/JobForm";
import { Container, LoadingOverlay, Text } from "@mantine/core";

const UpdateJob = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOneJob = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/job/${jobId}`
      );
      setJob(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching job data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOneJob();
  }, [jobId]);

  if (loading) return <p>Loading job data...</p>;
  return (
    <Container size="sm" className="update-job-container">
      <LoadingOverlay visible={loading} />
      {!loading && job ? (
        <JobForm job={job} />
      ) : (
        <Text align="center" className="loading-text">
          Loading job data...
        </Text>
      )}
    </Container>
  );
};
export default UpdateJob;
