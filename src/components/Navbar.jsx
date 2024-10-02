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
    /*  <header className={classes.header}>
      <div className={classes.inner}> */
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
        <Menu.Item component={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item component={Link} to="/jobs">
          Job List
        </Menu.Item>
        <Menu.Item component={Link} to="/job/:jobId/Update">
          Job Update
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default Navbar;

{
  /* <header className={classes.header}>
  <div className={classes.inner}>
    <Group>
      <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
        {items}
      </Group>
      <Autocomplete
        className={classes.search}
        placeholder="Search"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        data={[
          "React",
          "Angular",
          "Vue",
          "Next.js",
          "Riot.js",
          "Svelte",
          "Blitz.js",
        ]}
        visibleFrom="xs"
      />
    </Group>
  </div>
</header>;
 */
}
