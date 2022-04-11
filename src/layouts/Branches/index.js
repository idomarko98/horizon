import Grid from "@mui/material/Grid";

import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import BranchesData from "./data/BranchesData";
import BranchCard from "../../examples/Cards/Box/BranchCard";

function Branches() {
  const { branches } = BranchesData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {branches.map((branch) => (
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <BranchCard
                  color={branch.color}
                  icon="weekend"
                  title={branch.name}
                  description={branch.description}
                  percentage={{
                    color: "success",
                    amount: branch.numberOfPeople,
                    label: "People",
                  }}
                  href="/branch"
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Branches;
