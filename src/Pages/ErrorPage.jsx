import React from "react";
import { Box, Title, Text } from "@mantine/core";
import classes from "../styles/Home.module.css";

const ErrorPage = () => {
  return (
    <Box className={classes.home}>
      <Title className={classes.title}>Welcome to Jobs App Tracker</Title>
      <Box className={classes.paragraphBox}>
        <Text className={classes.paragraph}>Error 404</Text>
        <Text className={classes.paragraph}>Try again, mate!</Text>
      </Box>
    </Box>
  );
};

export default ErrorPage;
