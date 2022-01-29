import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// BioCoins Dashboard React components
import SuiBox from "components/SuiBox";

// BioCoins Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

// BioCoins Dashboard React context
import { useSoftUIController } from "context";

// BioCoins Dashboard React routes
import routes from "routes";

// Custom styles for the BaseLayout
import styles from "layouts/virtual-reality/components/BaseLayout/styles";

function BaseLayout({ children }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const classes = styles();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      dispatch({ type: "MINI_SIDENAV", value: false });
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      dispatch({ type: "MINI_SIDENAV", value: true });
      setOnMouseEnter(false);
    }
  };

  // Change the document layout to VR for the VR view
  useEffect(() => {
    dispatch({ type: "LAYOUT", value: "vr" });
    dispatch({ type: "TRANSPARENT_SIDENAV", value: false });
  }, [pathname]);

  return (
    <SuiBox customClass={classes.baseLayout}>
      <SuiBox mt={3} mx={3}>
        <DashboardNavbar />
      </SuiBox>
      <SuiBox customClass={classes.baseLayout_background}>
        <SuiBox display={{ xs: "block", lg: "none" }}>
          <Sidenav
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </SuiBox>
        <SuiBox customClass={classes.baseLayout_content}>
          <SuiBox display={{ xs: "none", lg: "block" }}>
            <Sidenav
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          </SuiBox>
          <DashboardLayout>{children}</DashboardLayout>
        </SuiBox>
      </SuiBox>
      <SuiBox pb={2}>
        <Footer />
      </SuiBox>
    </SuiBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
