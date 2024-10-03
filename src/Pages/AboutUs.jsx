import React from "react";
import { Box, Title, Text } from "@mantine/core";
import classes from "../styles/Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box className={classes.home}>
      <Title className={classes.title}>About Us</Title>
      <Box className={classes.paragraphBox}>
        <Text className={classes.paragraph}>
          Welcome to our web development project from Kevin Abaskaran &
          Alexandro Lastra
        </Text>
        <Text className={classes.paragraph}>
          You may contact us tru our gitHub accounts
        </Text>
        <Link to="https://www.github.com/Sivva2"> github.com/Sivva2</Link>{" "}
        {" & "}
        <Link to="https://www.github.com/alexandrolastra">
          {" "}
          /alexandrolastra{" "}
        </Link>
      </Box>
      <Box className={classes.paragraph}></Box>
    </Box>
  );
};

export default Home;
