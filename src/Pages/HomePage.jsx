import React from "react";
import { Box, Title, Text, Button, Card, Center } from "@mantine/core";
import classes from "../styles/Home.module.css";

const FeatureCard = ({ title, description }) => (
  <Card
    shadow="sm"
    padding="lg"
    radius="md"
    withBorder
    className={classes.featureCard}
  >
    <Title order={3}>{title}</Title>
    <Text>{description}</Text>
  </Card>
);

const Home = () => {
  return (
    <Box className={classes.home}>
      <Box className={classes.heroSection}>
        <Center>
          <Title className={classes.heroTitle}>
            Welcome to Jobs App Tracker
          </Title>
        </Center>
        <Center>
          <Text className={classes.heroSubtitle}>
            Track your job applications and stay organized!
          </Text>
        </Center>
      </Box>

      <Box className={classes.paragraphBox}>
        <Text className={classes.paragraph}>
          This application helps you keep track of your job applications, manage
          your job search process, and stay organized.
        </Text>
        <Text className={classes.paragraph}>
          You can add new job listings, update existing ones, and monitor your
          progress. Stay on top of your job search with Jobs App Tracker!
        </Text>
      </Box>

      <Box mt="xl" className={classes.featuresSection}>
        <Title order={2} align="center">
          Features
        </Title>
        <Box className={classes.featuresContainer}>
          <FeatureCard
            title="Track Applications"
            description="Keep a detailed log of all your job applications and their status."
          />
          <FeatureCard
            title="Search Jobs (Upcoming features)"
            description="Easily search and filter job listings that match your interests."
          />
          <FeatureCard
            title="Set Reminders (Upcoming features)"
            description="Never miss an application deadline or follow-up with reminders."
          />
        </Box>
      </Box>

      <Box mt="xl" className={classes.testimonialsSection}>
        <Title order={3} align="center">
          What Our Users Say
        </Title>
        <Center>
          <Text className={classes.testimonial}>
            "This app transformed my job search process. Highly recommend!"
          </Text>
        </Center>
        <Center>
          <Text className={classes.testimonial}>
            "I love how organized everything is now. A lifesaver!"
          </Text>
        </Center>
      </Box>
    </Box>
  );
};

export default Home;
