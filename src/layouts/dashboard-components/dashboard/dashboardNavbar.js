import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "./breadCrumbs";
import NotificationItem from "./notificationItem";


function DashboardNavbar({ absolute, light, }) {
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);


  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark } }) => ({
    color: () => {
      let colorValue = dark.main;
      return colorValue;
    },
  });

  return (
    <AppBar
      position={"static"}
      color="inherit"
      sx={{
        display: "grid",
        alignItems: "center",
        borderRadius: 3,
        paddingTop: 2,
        paddingBottom: 2
      }}
    >
      <Toolbar>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} display="flex" alignItems="center" justifyContent="stretch" width="max-content">
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </MDBox>
        {
          <MDBox>
            <MDBox pr={50} >
              <MDInput label="Search here" />
            </MDBox>

            <MDBox color={"white"}>
              <Link to="/authentication/sign-in/">
                <IconButton
                  size="medium"
                  disableRipple
                  color="inherit">
                  <Icon sx={iconsStyle}>account_circle</Icon>
                </IconButton>
              </Link>
              <IconButton
                size="medium"
                disableRipple
                color="inherit"
              >
                <Icon sx={iconsStyle}>settings</Icon>
              </IconButton>
              <IconButton
                size="medium"
                disableRipple
                color="inherit"
                onClick={handleOpenMenu}
              >
                <Icon sx={iconsStyle}>notifications</Icon>
              </IconButton>
              {renderMenu()}
            </MDBox>
          </MDBox>
        }
      </Toolbar>
    </AppBar >
  );
}

export default DashboardNavbar;
