import {
  Box,
  Title,
  Text,
  Group,
  Anchor,
  Avatar,
  Divider,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from "../styles/Home.module.css";
import github from "../images/github_icon.png";

const Home = () => {
  return (
    <Box className={classes.home}>
      <Title order={1} className={classes.title}>
        About Us
      </Title>
      <Box className={classes.paragraphBox}>
        <Text className={classes.paragraph}>
          Welcome to our web development project by
          <strong> Kevin Abaskaran</strong> & <strong>Alexandro Lastra</strong>.
        </Text>
        <Text className={classes.paragraph}>
          Feel free to explore our work and contact us via GitHub:
        </Text>
        <Divider my="sm" />
        <Group position="center" spacing="xl" className={classes.team}>
          <Box className={classes.profile}>
            <Avatar src={github} alt="Kevin Abaskaran" size={80} radius="xl" />
            <Text className={classes.name}>Kevin Abaskaran</Text>
            <Anchor
              href="https://www.github.com/Sivva2"
              target="_blank"
              className={classes.githubLink}
            >
              <IconBrandGithub size={20} /> github.com/Sivva2
            </Anchor>
          </Box>

          <Box className={classes.profile}>
            <Avatar src={github} alt="Alexandro Lastra" size={80} radius="xl" />
            <Text className={classes.name}>Alexandro Lastra</Text>
            <Anchor
              href="https://www.github.com/alexandrolastra"
              target="_blank"
              className={classes.githubLink}
            >
              <IconBrandGithub size={20} /> github.com/alexandrolastra
            </Anchor>
          </Box>
        </Group>
        <Divider my="sm" />
      </Box>
    </Box>
  );
};

export default Home;
