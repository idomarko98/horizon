import Grid from "@mui/material/Grid";

import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import BranchCard from "../../examples/Cards/Box/BranchCard";
import TeamsData from "./data/TeamsData";

function Teams() {
  const { teams } = TeamsData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {teams.map((team) => (
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <BranchCard
                  color={team.color}
                  icon="weekend"
                  title={team.name}
                  description={team.description}
                  percentage={{
                    color: "success",
                    amount: team.numberOfPeople,
                    label: "People",
                  }}
                  href="/teams"
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Teams;
