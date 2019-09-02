import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const DoughnutChart = () => {
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: ["#47BAC1", "#5fc27e", "#fcc100", "#E8EAED"],
        borderColor: "transparent"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 65,
    legend: {
      display: false
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Doughnut Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          Doughnut charts are excellent at showing the relational proportions
          between data.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart chart-sm">
          <Doughnut data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default DoughnutChart;
