import React from "react";
import { Pie } from "react-chartjs-2";

import {
  CardBody,
  Card,
  CardHeader,
  CardTitle,
} from "reactstrap";

const PieChart = ({ payments = [] }) => {
  const data = {
    labels: payments.map(item => item.date),
    datasets: [
      {
        data: payments.map(item => item.paid),
        // backgroundColor: ["#47BAC1", "#fcc100", "#f44455", "#E8EAED"],
        borderColor: "transparent"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };

  return (
    <Card className="flex-fill w-100">
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          Money spent per month
        </CardTitle>
      </CardHeader>
      <CardBody className="d-flex">
        <div className="align-self-center w-100">
          <div className="py-3">
            <div className="chart chart-xs">
              <Pie data={data} options={options} />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PieChart;
