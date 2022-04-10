/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "25%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "time in team", accessor: "team_time", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "TTL", accessor: "ttl", align: "center" },
      { Header: "Wants to transfer?", accessor: "move", align: "center" },
      { Header: "specialization", accessor: "special", align: "center" },
      // { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: (
          <Author
            image={team2}
            name="John Michael"
            email="john@creative-tim.com"
          />
        ),
        function: <Job title="Tester" description="Trainee" />,
        team_time: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            1 month
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="online"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        ttl: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            5 years
          </MDTypography>
        ),
        move: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            No
          </MDTypography>
        ),
        special: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            -
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        name: <Author image={team3} name="Yossi" email="yossi@gmail.com" />,
        function: <Job title="Fromer CEO" description="" />,
        team_time: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            60 years
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="offline"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        ttl: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            -10 months
          </MDTypography>
        ),
        move: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Yes
          </MDTypography>
        ),
        special: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Chess
          </MDTypography>
        ),
      },
      {
        name: <Author image={team4} name="David" email="david@hamelech.com" />,
        function: <Job title="Team leader" description="Senior" />,
        team_time: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            3 years
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="warning"
              color="error"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        ttl: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            4 months
          </MDTypography>
        ),
        move: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Yes
          </MDTypography>
        ),
        special: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            React, Kafka
          </MDTypography>
        ),
      },
      {
        name: <Author image={team4} name="Ido" email="ido@gestures.com" />,
        function: <Job title="Programmer" description="Junior" />,
        team_time: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            1.5 years
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="online"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        ttl: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            1 year
          </MDTypography>
        ),
        move: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Yes
          </MDTypography>
        ),
        special: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            -
          </MDTypography>
        ),
      },
    ],
  };
}
