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
      <Group className={classes.iconText}>
        {/*  <FaHome className={classes.icon} /> */}
        <Link>Home</Link>
      </Group>
      <Group className={classes.links}>
        <Button component={Link} to="/about" className={classes.link}>
          About Us
        </Button>

        <Link to="/" className={classes.link}>
          Home
        </Link>
        {/*    <Button component={Link} to="/services" className={classes.link}>
          Services
        </Button> */}
        <Button component={Link} to="/contact" className={classes.link}>
          Contact
        </Button>
      </Group>
    </Box>
  );
};

export default Footer;
