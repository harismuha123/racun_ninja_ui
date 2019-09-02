import React from "react";
import { Col, Card, CardBody, Media, Row } from "reactstrap";

import { DollarSign, Home, CreditCard, List } from "react-feather";

import * as config from "../../../redux/constants";
import axios from "axios";
import jwt_decode from "jwt-decode";

class Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      residential_units: 0,
      total_paid: 0,
      average_debt: 0,
      total_debt: 0,
    };
  }

  componentWillReceiveProps(ownProps) {
    this.setState({
      residential_units: ownProps.residential_units ? ownProps.residential_units : 0
    })
  }

  fetchData = () => {
    let user_id = jwt_decode(localStorage.getItem("access_token")).data.user_id;
    axios.get(config.BASE_URL + "/bills/data/" + user_id, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
        "Content-Type": "application/json"
      }
    }).then(response => {
      const { total_paid, average_debt, total_debt } = response.data;
      this.setState({
        total_debt: total_debt ? total_debt : 0,
        total_paid: total_paid ? total_paid : 0,
        average_debt: average_debt ? average_debt : 0
      });
    }).catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {

    const { residential_units, total_paid, average_debt, total_debt } = this.state;

    return (
      <Row>
        <Col md="6" xl>
          <Card className="flex-fill">
            <CardBody className="py-4">
              <Media>
                <div className="d-inline-block mt-2 mr-3">
                  <Home className="feather-lg text-warning" />
                </div>
                <Media body>
                  <h3 className="mb-2">{residential_units}</h3>
                  <div className="mb-0">Residential Units</div>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl>
          <Card className="flex-fill">
            <CardBody className="py-4">
              <Media>
                <div className="d-inline-block mt-2 mr-3">
                  <DollarSign className="feather-lg text-success" />
                </div>
                <Media body>
                  <h3 className="mb-2"> {average_debt} </h3>
                  <div className="mb-0">Average Cost per Bill</div>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl>
          <Card className="flex-fill">
            <CardBody className="py-4">
              <Media>
                <div className="d-inline-block mt-2 mr-3">
                  <CreditCard className="feather-lg text-success" />
                </div>
                <Media body>
                  <h3 className="mb-2">{total_paid} KM</h3>
                  <div className="mb-0">Money Spent</div>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl>
          <Card className="flex-fill">
            <CardBody className="py-4">
              <Media>
                <div className="d-inline-block mt-2 mr-3">
                  <List className="feather-lg text-danger" />
                </div>
                <Media body>
                  <h3 className="mb-2"> - {total_debt} KM</h3>
                  <div className="mb-0">Total Debt</div>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
};

export default Statistics;
