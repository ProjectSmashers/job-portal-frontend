
// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Link from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import SidenavLayout from "./SidenavLayout";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { Drawer } from "@mui/material";
import { fontSize } from "@mui/system";

function Sidenav({ brand, brandName, routes, }) {
  const { darkMode } = useMaterialUIController();
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";


  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{
            textDecoration: "none"
          }}
        >
          <SidenavLayout
            name={name}
            icon={icon}
            active={key}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavLayout name={name} icon={icon} active={key} />
        </NavLink>
      );
    }
    return returnValue;
  });

  return (
    <Drawer
      variant="permanent"
      ownerState={{ darkMode }}
      sx={{
        "& .MuiDrawer-paper": {
          color: 'white',
          background: 'linear-gradient(to right bottom, #000, #0073e5)',
        },
      }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem" />}
          <MDBox
            width={"100%"}
          >
            <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <List>{renderRoutes}</List>

    </Drawer>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
