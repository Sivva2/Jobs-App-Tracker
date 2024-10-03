/* const Footer = () => {
  return (
    <>
      <p>Footer</p>
    </>
  );
};
 */

import React from "react";
import { Box, Text, Group, Button } from "@mantine/core";
/* import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa"; */
import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <Box className={classes.footer}>
      <Group className={classes.links}>
        {/*  <FaHome className={classes.icon} /> */}
        <Link to="/" className={classes.link}>
          Home
        </Link>
      </Group>
      <Group className={classes.links}>
        {/*  <FaHome className={classes.icon} /> */}
        <Link
          rel="icon"
          type="image/png"
          href="https://www.vhv.rs/dpng/d/604-6049672_github-logo-png-github-svg-icon-transparent-png.png"
          to="https://github.com/Sivva2/Jobs-App-Tracker"
          className={classes.link}
        ></Link>
        <Link
          target="https://github.com/Sivva2/Jobs-App-Tracker"
          to="https://github.com/Sivva2/Jobs-App-Tracker"
          className={classes.link}
        >
          GitHub Repo
        </Link>
      </Group>
      <Group className={classes.links}>
        <Link to="/aboutus" className={classes.link}>
          About Us
        </Link>
        {/*         <Button component={Link} to="/aboutus" className={classes.link}>
          About us
        </Button> */}
      </Group>
    </Box>
  );
};

export default Footer;
