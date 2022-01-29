// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";

// Custom styles for the Projects
import styles from "layouts/dashboard/components/Projects/styles";

// Images
import logoXD from "assets/images/small-logos/logo-xd.png";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.png";
import logoSlack from "assets/images/small-logos/logo-slack.png";
import logoSpotify from "assets/images/small-logos/logo-spotify.jpg";
import logoJira from "assets/images/small-logos/logo-jira.jpg";
import logoInvesion from "assets/images/small-logos/logo-invision.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const classes = styles();

  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SuiAvatar src={image} alt="name" size="xs" customClass={classes.projects_tableAvatar} />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "researcher", align: "left" },
      { name: "members", align: "left" },
      { name: "funding", align: "center" },
      { name: "clinical_stage", align: "center" },
    ],

    rows: [
      {
        researcher: [logoXD, "Technical University Berlin"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        funding: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $14,000
          </SuiTypography>
        ),
        clinical_stage: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        researcher: [logoAtlassian, "Harvard T.H. Chan School of Public Health"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        funding: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $3,000
          </SuiTypography>
        ),
        clinical_stage: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={10} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        researcher: [logoSlack, "Ageless Partners"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </SuiBox>
        ),
        funding: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Not set
          </SuiTypography>
        ),
        clinical_stage: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={100} color="success" gradient />
          </SuiBox>
        ),
      },
      {
        researcher: [logoSpotify, "MIT School of Bioengineering Sciences"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </SuiBox>
        ),
        funding: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $20,500
          </SuiTypography>
        ),
        clinical_stage: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={100} color="success" gradient />
          </SuiBox>
        ),
      },
      {
        researcher: [logoJira, "Tsinghua University"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </SuiBox>
        ),
        funding: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $500
          </SuiTypography>
        ),
        clinical_stage: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={25} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        researcher: [logoInvesion, "Carnegie Mellon University School of Computer Science"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        funding: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $2,000
          </SuiTypography>
        ),
        clinical_stage: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={40} color="info" gradient />
          </SuiBox>
        ),
      },
    ],
  };
}
