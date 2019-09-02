import React from "react";
import { Container, Row, Col } from "reactstrap";

import LineChart from "./LineChart";
import BarChart from "./BarChart";

import Statistics from "./Statistics";
import USAMap from "./USAMap";
import Activity from "./Activity";
import Products from "./Products";

function Ecommerce() {
  return (
    <Container fluid className="p-0">
      <Statistics />
      <Row>
        <Col lg="4" className="d-flex">
          <USAMap />
        </Col>
        <Col md="7" lg="4" className="col-xxl-6 d-flex">
          <LineChart />
        </Col>
        <Col md="5" lg="4" className="col-xxl-2 d-flex">
          <Activity />
        </Col>
      </Row>
      <Row>
        <Col lg="8" className="d-flex">
          <Products />
        </Col>
        <Col lg="4" className="d-flex">
          <BarChart />
        </Col>
      </Row>
    </Container>
  );
}

export default Ecommerce;
