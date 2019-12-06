import React from "react";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import SubPageHeader from "../components/misc/SubPageHeader";

const Dashboard = () => {
  return (
    <React.Fragment>
      <SubPageHeader title="Dashboard" actionEnabled={false} />
      <DashboardComponent />
    </React.Fragment>
  );
};

export default Dashboard;
