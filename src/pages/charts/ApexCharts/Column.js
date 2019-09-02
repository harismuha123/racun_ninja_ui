import React from "react";
import Chart from "react-apexcharts";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const ColumnChart = () => {
  const data = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ];

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
        }
      }
    },
    colors: ["#0cc2aa", "#5fc27e", "#fcc100", "#f44455", "#5b7dff"]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Column Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          A column chart uses vertical bars to display data and is used to
          compare values across categories.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Chart options={options} series={data} type="bar" height="350" />
        </div>
      </CardBody>
    </Card>
  );
};

export default ColumnChart;
