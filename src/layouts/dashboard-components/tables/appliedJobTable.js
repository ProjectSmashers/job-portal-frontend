// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "../dashboard/dashboardLayout";
import DashboardNavbar from "../dashboard/dashboardNavbar";
import Footer from "../dashboard/dashboardFooter";
import DataTable from "./tableData";


function Tables() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Applied Job List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns: [
                      { Header: "company name", accessor: "companyName", align: "center" },
                      { Header: "job name", accessor: "jobName", align: "left" },
                      { Header: "description", accessor: "description", width: "45%", align: "left" },
                      { Header: "status", accessor: "status", align: "center" },
                      { Header: "applied Date", accessor: "appliedDate", align: "center" }
                    ],

                    rows: [
                      {
                        companyName: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        DEF COMPANY
                        </MDTypography>),
                        jobName: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        CDE SSKIL
                        </MDTypography>),
                        status: (
                          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            23/04/18
                          </MDTypography>
                        ),
                        appliedDate: (
                          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            Edit
                          </MDTypography>
                        ),
                      },
                      {
                        companyName: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        ABC COMPANY
                        </MDTypography>),
                        jobName: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        CDE SSKIL
                        </MDTypography>),
                        status: (
                          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            23/04/18
                          </MDTypography>
                        ),
                        appliedDate: (
                          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            Edit
                          </MDTypography>
                        ),
                      },
                      {
                        companyName: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        DEF COMPANY
                        </MDTypography>),
                        jobName: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        CDE SSKIL
                        </MDTypography>),
                        status: (
                          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            23/04/18
                          </MDTypography>
                        ),
                        appliedDate: (
                          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            Edit
                          </MDTypography>
                        ),
                      },
                      {
                        companyName: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        DEF COMPANY
                        </MDTypography>),
                        jobName: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        CDE SSKIL
                        </MDTypography>),
                        status: (
                          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            23/04/18
                          </MDTypography>
                        ),
                        appliedDate: (
                          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            Edit
                          </MDTypography>
                        ),
                      },
                    ],
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
