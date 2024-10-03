import React from "react";
import { Box, Title, Text } from "@mantine/core";
import classes from "../styles/Home.module.css";

const Home = () => {
  return (
    <Box className={classes.home}>
      <Title className={classes.title}>Welcome to Jobs App Tracker</Title>
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
    </Box>
  );
};

export default Home;
