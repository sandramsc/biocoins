/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";

function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} gradient noLabel />
      </SuiBox>
    </SuiBox>
  );
}

export default {
  columns: [
    { name: "project", align: "left" },
    { name: "funding", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
  ],

  rows: [
    {
      project: [logoSpotify, "VitaDao"],
      funding: (
        <SuiTypography variant="button" textColor="text" fontWeight="medium">
          $8 million
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" textColor="text" fontWeight="medium">
          done
        </SuiTypography>
      ),
      completion: <Completion value={60} color="info" />,
    },
    {
      project: [logoInvesion, "Molecule"],
      funding: (
        <SuiTypography variant="button" textColor="text" fontWeight="medium">
          $12.2 million
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" textColor="text" fontWeight="medium">
          negotiating
        </SuiTypography>
      ),
      completion: <Completion value={100} color="error" />,
    },
    {
      project: [logoJira, "JHuman Longevity Inc"],
      funding: (
        <SuiTypography variant="button" textColor="text" fontWeight="medium">
          $3.2 million
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" textColor="text" fontWeight="medium">
          ongoing
        </SuiTypography>
      ),
      completion: <Completion value={30} color="success" />,
    },
    {
      project: [logoSlack, "Calico"],
      funding: (
        <SuiTypography variant="button" textColor="text" fontWeight="medium">
          $7 million
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" textColor="text" fontWeight="medium">
          ongoing
        </SuiTypography>
      ),
      completion: <Completion value={0} color="success" />,
    },
  ],
};
