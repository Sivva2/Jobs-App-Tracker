import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  TextInput,
  Textarea,
  Button,
  Group,
  Paper,
  Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import dayjs from "dayjs";

const JobForm = ({ job }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      id: job?.id || null,
      company: job?.company || "",
      jobTitle: job?.jobTitle || "",
      description: job?.description || "",
      dateApplied: job?.dateApplied ? new Date(job.dateApplied) : null,
      status: job?.status || "",
      contact: job?.contact || "",
      jobLink: job?.jobLink || "",
      notes: job?.notes || "",
    },
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const method = values.id ? "put" : "post";
      const url = values.id
        ? `${import.meta.env.VITE_API_URL}/jobs/${values.id}`
        : `${import.meta.env.VITE_API_URL}/jobs`;

      const formattedData = {
        ...values,
        dateApplied: values.dateApplied
          ? dayjs(values.dateApplied).format("YYYY-MM-DD")
          : null,
      };

      await axios({
        method: method,
        url: url,
        headers: { "Content-Type": "application/json" },
        data: formattedData,
      });

      showNotification({
        title: "Success",
        message: values.id
          ? "Job updated successfully!"
          : "Job application submitted successfully!",
        color: "green",
      });

      setTimeout(() => navigate(`/jobs`), 2000);
    } catch (error) {
      showNotification({
        title: "Error",
        message: "Failed to submit the form. Please try again.",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper shadow="md" radius="md" p="xl" withBorder>
      <Title order={2} mb="lg">
        {job ? "Update Job Application" : "Job Application Form"}
      </Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Company"
          placeholder="Enter company name"
          {...form.getInputProps("company")}
          required
          mb="md"
        />

        <TextInput
          label="Job Title"
          placeholder="Enter job title"
          {...form.getInputProps("jobTitle")}
          required
          mb="md"
        />

        <Textarea
          label="Job Description"
          placeholder="Describe the job position"
          {...form.getInputProps("description")}
          autosize
          minRows={3}
          mb="md"
        />

        <DatePicker
          label="Date Applied"
          placeholder="Pick a date"
          value={form.values.dateApplied}
          onChange={(value) => form.setFieldValue("dateApplied", value)}
          inputFormat="YYYY-MM-DD"
          labelFormat="MMMM YYYY"
          mb="md"
        />

        <TextInput
          label="Status"
          placeholder="Enter application status"
          {...form.getInputProps("status")}
          required
          mb="md"
        />

        <TextInput
          label="Contact"
          placeholder="Enter contact details (Email)"
          {...form.getInputProps("contact")}
          required
          mb="md"
        />

        <TextInput
          label="Job Link"
          placeholder="Paste job link"
          {...form.getInputProps("jobLink")}
          required
          mb="md"
        />

        <Textarea
          label="Notes"
          placeholder="Additional notes"
          {...form.getInputProps("notes")}
          autosize
          minRows={2}
          mb="lg"
        />

        <Group position="right">
          <Button type="submit" loading={loading}>
            {job ? "Update" : "Submit"}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default JobForm;
