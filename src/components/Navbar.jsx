import { Button, Menu } from "@mantine/core";
import classes from "../styles/navbar.css";

const Navbar = () => {
  return (
    <Menu opened={dropdownVisible} onChange={setDropdownVisible}>
      <Menu.Target>
        <Button> menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item component={Link} to="/joblist">
          Job List
        </Menu.Item>
        <Menu.Item component={Link} to="/job/${jobId}/Update">
          Job Update
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default Navbar;
