

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for the SidenavCollapse
import { sideNavStyles } from "./sidenavStyle";


function SidenavLayout({ icon, name }) {

  return (
    <ListItem component="li">
      <MDBox
        sx={(theme) =>
          sideNavStyles(theme, {})
        }
      >
        <ListItemIcon>
          {typeof icon === "string" ? (<Icon>{icon}</Icon>)
            : (icon)}
        </ListItemIcon>

        <ListItemText
          primary={name}
        />
      </MDBox>
    </ListItem>
  );
}

// Typechecking props for the SidenavCollapse
SidenavLayout.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default SidenavLayout;
