/* eslint-disable react/prop-types */
// BioCoins Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";

// Images
import name1 from "assets/images/name-1.png";
import name2 from "assets/images/name-2.png";
import name3 from "assets/images/name-3.png";
import name4 from "assets/images/name-4.png";
import name5 from "assets/images/name-5.png";
import name6 from "assets/images/name-6.png";
import name7 from "assets/images/name-7.png";

function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" textColor="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function Function({ job, org }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" textColor="text">
        {job}
      </SuiTypography>
      <SuiTypography variant="caption" textColor="secondary">
        {org}
      </SuiTypography>
    </SuiBox>
  );
}

export default {
  columns: [
    { name: "BioCoins Team", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
  ],

  rows: [
    {
      author: <Author image={name1} name="Sandra Ashipala" email="sandra@biocoins.com" />,
      function: <Function job="Computer Scientist" org="Developer" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
      ),
    },
    {
      author: <Author image={name2} name="Jason Mercurio" email="jason@biocoins.com" />,
      function: <Function job="Quantitative Analyst II" org="Analyst" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
    },
    {
      author: <Author image={name3} name="Triyaksh Mathur" email="triyaksh@biocoins.com" />,
      function: <Function job="XR intern" org="Mixed Reality" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
      ),
    },
    {
      author: <Author image={name4} name="Ketan Bansal" email="ketan@biocoins.com" />,
      function: <Function job="Director of Machine Learing" org="Machine Learing" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
      ),
    },
    {
      author: <Author image={name5} name="Stephen Price" email="stephen@biocoins.com" />,
      function: <Function job="Chief Data Officer" org="Data Science" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
    },
    {
      author: <Author image={name6} name="Aditiy Iyer" email="aditiy@biocoins.com" />,
      function: <Function job="Biomedical Engineering student" org="Biomedical Engineering" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
    },
    {
      author: <Author image={name7} name="Chris Lovejoy" email="chris@biocoins.com" />,
      function: <Function job="NHS Medical Doctor" org="Medical Doctor" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
    },
  ],
};
