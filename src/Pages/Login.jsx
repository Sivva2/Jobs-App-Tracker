import React, { useState } from "react";
import {
  Box,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Autocomplete,
  Fieldset,
  Checkbox,
} from "@mantine/core";
import classes from "../styles/Home.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Box className={classes.home}>
      <Title className={classes.title}>Login to Jobs App Tracker</Title>
      <Box className={classes.paragraphBox}>
        <TextInput
          autoComplete={["Web-dev Jr", "Web-dev Sr"]}
          label="Username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          data={["Web-dev Jr", "Web-dev Sr"]}
          className={classes.input}
          visibleFrom="xs"
          description="Description"
          withAsterisk
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          className={classes.input}
        />
        <Fieldset legend="Disabled" disabled>
          <Checkbox defaultChecked label="I agree to sell my privacy" />
          <Button onClick={handleLogin} className={classes.button}>
            Log In
          </Button>
        </Fieldset>
      </Box>
    </Box>
  );
};
export default Login;

/* 
export default Login;
import React, { useState } from "react";
import { Box, Title, Text, TextInput, PasswordInput, Button } from "@mantine/core";
import classes from "../styles/Home.module.css"; 

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
 */
