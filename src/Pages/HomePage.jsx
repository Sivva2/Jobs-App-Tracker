<<<<<<< Updated upstream
/* import {
  Group,
  Button,
  Box,
  Text,
  Menu,
  Autocomplete,
  VisuallyHidden,
  Title,
  Container,
} from "@mantine/core";
  import classes from "../styles/navbar.css"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <Box bg="var(--mantine-color-blue-light)" style={{ overflow: "hidden" }}>
      <Box p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <div className={classes.header}>
          <div className={classes.inner}>
            <Title>
              <h1>Job App Tracker Home</h1>
            </Title>
            <Container>
              <Text size="sm" mb={5}>
                {/*  preventGrowOverflow: true – each child width is always limited to 33% of parent width
          (since there are 3 children)  
                <p>Job app Tracker Home</p>
              </Text>
            </Container>
          </div>
        </div>
      </Box>
    </Box>
  );
};
export default HomePage; */

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
=======
const HomePage = () => {
  return (
    <>
      <h1>Job app Tracker Home</h1>
    </>
  );
};
export default HomePage;
>>>>>>> Stashed changes
