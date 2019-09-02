import React from "react";
import Chart from "react-apexcharts";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const AreaChart = () => {
  const data = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];

  const options = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00"
      ]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
    colors: ["#0cc2aa", "#5fc27e", "#fcc100", "#f44455", "#5b7dff"]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Area Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          Area charts are used to represent quantitative variations.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Chart options={options} series={data} type="area" height="350" />
        </div>
      </CardBody>
    </Card>
  );
};

export default AreaChart;
