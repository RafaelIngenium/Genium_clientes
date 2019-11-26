import React from "react";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import SubPageHeader from "../components/misc/SubPageHeader";

const Dashboard = () => {
  return (
    <div className="main">
      <SubPageHeader title="Dashboard" actionEnabled={false} />
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
