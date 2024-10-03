import {
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
/* import classes from "../styles/navbar.css"; */
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const demoProps = {
    bg: "var(--mantine-color-blue-light)",
    h: 50,
    mt: "md",
  };

  return (
    <Box style={{ overflow: "visible" }}>
      <Box p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          {/*  preventGrowOverflow: true – each child width is always limited to 33% of parent width
          (since there are 3 children)  */}
        </Text>
        <Group gap="xl" grow preventGrowOverflow={false} wrap="nowrap">
          <Menu opened={dropdownVisible} onChange={setDropdownVisible}>
            <Menu.Target className="header">
              <Button className="header" variant="default">
                {" "}
                Menu
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item className="header" component={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item className="droplistitem" component={Link} to="/jobs">
                Job List
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>{" "}
          <Group justify="center">
            <Link to="/"> </Link>

            <Title size="md" variant="default">
              Jobs App Tracker
            </Title>
          </Group>
          <Autocomplete
            className="header"
            placeholder="Search"
            data={[
              "Web-dev Jr",
              "Web-dev Sr",
              "Internship",
              "Business Analyst",
              "Business Intelligence Analyst",
              "Product Manager Jr",
              "Business Dev",
            ]}
            visibleFrom="xs"
          />
          <Button className="header" component={Link} to="/login">
            {" "}
            Login
          </Button>
        </Group>
      </Box>
    </Box>
  );
};
export default Navbar;
