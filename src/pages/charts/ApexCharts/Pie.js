import React from "react";
import Chart from "react-apexcharts";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const PieChart = () => {
  const data = [44, 55, 13, 33];

  const options = {
    dataLabels: {
      enabled: false
    },
    colors: ["#0cc2aa", "#5fc27e", "#fcc100", "#f44455", "#5b7dff"]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Pie Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          Pie charts are an instrumental visualization tool useful in expressing
          data and information in terms of percentages, ratio.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Chart options={options} series={data} type="donut" height="350" />
        </div>
      </CardBody>
    </Card>
  );
};

export default PieChart;
