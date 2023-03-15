/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "./layouts/dashboard-components/dashboard/dashboard";
import Profile from "./layouts/dashboard-components/profile/profile";
import Tables from "./layouts/dashboard-components/tables/appliedJobTable";
import Notifications from "./layouts/dashboard-components/notifications/notification";
import SignIn from "layouts/authentication/signIn";
import SignUp from "layouts/authentication/signUp";
import ResetPassword from "layouts/authentication/resetPassword";
import CandidateBasic from "layouts/candidateDetails/CandidateBasic";
import CompanyAbout from "layouts/companyDetails/CompanyAbout";
import Homepage from "layouts/landing-page/homePage";
import CandidateBasic from "layouts/candidateDetails/CandidateBasic";
import CompanyAbout from "layouts/companyDetails/CompanyAbout";



// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">Home</Icon>,
    route: "/home",
    component: <Homepage />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Available Job List",
    key: "availableJobList",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Reset Password",
    key: "reset-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/reset-password",
    component: <ResetPassword />

  },
  {
    type: "collapse",
    name: "Candidate Details",
    key: "candidate-details",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/candidate-details",
    component: <CandidateBasic />
  },
  {
    type: "collapse",
    name: "Company Details",
    key: "company-details",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/company-details",
    component: <CompanyAbout />,
  },
];

export default routes;
