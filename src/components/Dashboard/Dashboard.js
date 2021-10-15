import React from "react";
import history from "../../history";

const Dashboard = () => {
  return (
    <div>
      <p> dashboard</p>
      <button onClick={() => history.push("/")}>Navegar a principal</button>
    </div>
  );
};

export default Dashboard;
