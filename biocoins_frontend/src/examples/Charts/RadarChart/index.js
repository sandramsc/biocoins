import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Radar } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// RadarChart configurations
import configs from "examples/Charts/RadarChart/configs";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Soft UI Dashboard React helper functions
import rgba from "assets/theme/functions/rgba";

function RadarChart({ title, description, chart }) {
  const chartDatasets = chart.datasets.map((dataset) => ({
    ...dataset,
    backgroundColor: rgba(colors[dataset.color].main, 0.2),
  }));

  const { data, options } = configs(chart.labels, chartDatasets);

  const renderChart = (
    <SuiBox p={2}>
      {title || description ? (
        <SuiBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <SuiBox mb={1}>
              <SuiTypography variant="h6">{title}</SuiTypography>
            </SuiBox>
          )}
          <SuiBox mb={2}>
            <SuiTypography variant="button" fontWeight="regular" textColor="text">
              {description}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      ) : null}
      {useMemo(
        () => (
          <SuiBox p={6}>
            <Radar data={data} options={options} />
          </SuiBox>
        ),
        [chart]
      )}
    </SuiBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of RadarChart
RadarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the RadarChart
RadarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default RadarChart;
