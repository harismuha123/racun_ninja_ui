import React from "react";
import { Radar } from "react-chartjs-2";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const RadarChart = () => {
  const data = {
    labels: ["Speed", "Reliability", "Comfort", "Safety", "Efficiency"],
    datasets: [
      {
        label: "Model X",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "#47BAC1",
        pointBackgroundColor: "#47BAC1",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#47BAC1",
        data: [70, 53, 82, 60, 33]
      },
      {
        label: "Model S",
        backgroundColor: "rgba(220, 53, 69, 0.2)",
        borderColor: "#f44455",
        pointBackgroundColor: "#f44455",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#f44455",
        data: [35, 38, 65, 85, 84]
      }
    ]
  };

  const options = { maintainAspectRatio: false };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Radar Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          A radar chart is a way of showing multiple data points and the
          variation between them.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Radar data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default RadarChart;
