// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// BioCoins Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function TodoCard() {
  return (
    <Card>
      <SuiBox backgroundColor="dark" backgroundGradient>
        <SuiBox p={3}>
          <SuiBox display="flex" justifyContent="space-between">
            <SuiTypography variant="h5" textColor="white">
              To Do
            </SuiTypography>
            <SuiBox textAlign="center" lineHeight={1}>
              <SuiTypography variant="h1" textColor="white" fontWeight="bold">
                4
              </SuiTypography>
              <SuiTypography variant="button" textColor="white" fontWeight="regular">
                items
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiTypography variant="body2" textColor="white" fontWeight="regular">
            *Research paper
          </SuiTypography>
          <SuiTypography variant="body2" textColor="white" fontWeight="regular">
            *BioCoins meeting
          </SuiTypography>
        </SuiBox>
        <Tooltip title="Show More" placement="top" className="cursor-pointer">
          <SuiBox textAlign="center" py={0.5} lineHeight={0}>
            <Icon className="font-bold text-white" fontSize="medium">
              keyboard_arrow_down
            </Icon>
          </SuiBox>
        </Tooltip>
      </SuiBox>
    </Card>
  );
}

export default TodoCard;
