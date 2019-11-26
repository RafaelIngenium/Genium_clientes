import React from "react";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import Header from "../components/Dashboard/Header";

const Dashboard = () => {
  return (
    <div className="main">
      <Header />
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
