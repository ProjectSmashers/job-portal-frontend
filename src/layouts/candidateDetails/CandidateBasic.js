// react-router-dom components
import { Link } from "react-router-dom";

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "layouts/authentication/basicLayout";

import Axios from "axios";
import CandidateEdu from "./CandidateEdu";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
//Basic Details
function CandidateBasic() {
  const [candidate, setCandidate] = useState({
    // Basic Details
    languages: "",
    programmingLanguages: "",
    tools: "",
    passingYear: "",
    aggregate: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandidate({
      ...candidate,
      [name]: value,
    });
  };

  const save = () => {
    const { languages, programmingLanguages, tools, passingYear, aggregate } =
      candidate;
      sessionStorage.setItem("candidateId", "63bac979734ecf4bfdbb1288");
      let candidateId = sessionStorage.getItem("candidateId");
    Axios.put(
      "http://localhost:7000/api/candidates/63bac979734ecf4bfdbb1288/basicdetail/",
      candidate
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Fill Candidate Details
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="languages"
                value={candidate.languages}
                label="DOB"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="programmingLanguages"
                value={candidate.programmingLanguages}
                label="programmingLanguages"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="tools"
                value={candidate.tools}
                label="tools"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="number"
                name="passingYear"
                value={candidate.passingYear}
                label="Mobile no."
                fullWidth
                multiline
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="aggregate"
                value={candidate.aggregate}
                label="aggregate"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={save}
              >
                Save
              </MDButton>
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="success"
                fullWidth
                href="/candidate-edu"
              >
                Candidate Education
              </MDButton>
            </MDBox>
            
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CandidateBasic;
