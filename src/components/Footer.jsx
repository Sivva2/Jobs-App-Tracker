import React from "react";
import { Box, Text, Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";
import { Image } from "@mantine/core";
const Footer = () => {
  return (
    <Box className={classes.footer}>
      <Group className={classes.links}>
        <Link to="/" className={classes.link}>
          Home
        </Link>
      </Group>

      <Group className={classes.links}>
        <Image
          className={classes.links}
          radius="md"
          h={32}
          w={32}
          src="../images/github_32.png"
        />
        <Link
          target="https://github.com/Sivva2/Jobs-App-Tracker"
          to="https://github.com/Sivva2/Jobs-App-Tracker"
          className={classes.link}
        >
          {" "}
          GitHub Repo
        </Link>
      </Group>
      <Group className={classes.links}>
        <Link to="/aboutus" className={classes.link}>
          About Us
        </Link>
      </Group>
    </Box>
  );
};

export default Footer;
