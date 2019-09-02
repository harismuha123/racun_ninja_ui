import React from "react";
import {
  Container, Row, Col, Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";

import axios from "axios";
import * as config from "../../../redux/constants";
import jwt_decode from "jwt-decode";

import Statistics from "./Statistics";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";


const ResidentialUnitCard = ({ location, isOpen, saveState, active, chart, chartOpen, data }) => (
  <Card>
    <CardHeader>
      <CardTitle tag="h4" className="mb-0">
        <b>{location.name}</b>
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Row>
        <Col lg="6">
          <CardText>
            <b>Address: </b> {location.address}
          </CardText>
          <br />
          <iframe className="leaflet-container"
            title={location.name}
            src={`https://maps.google.com/maps?q=${String(location.address).replace(" ", "%20").replace(",", "%20")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0">
          </iframe>
        </Col>
        <Col lg="6">
              <div style={{ display: "flex" }}>
              <Dropdown isOpen={isOpen} toggle={() => saveState("isOpen", !isOpen)}>
                <DropdownToggle caret color="success">
                  {active}
                </DropdownToggle>
                <DropdownMenu
                  className="mb-2"
                >
                  {
                    location && location.providers &&
                    location.providers.map((item, index) => {
                      return (
                        <DropdownItem key={index} tag="a" active={active === item.name} onClick={() => saveState("active", item.name)}>
                          {
                            item.name
                          }
                        </DropdownItem>
                      )
                    })
                  }
                </DropdownMenu>
              </Dropdown>
              &nbsp;&nbsp;
              <Dropdown isOpen={chartOpen} toggle={() => saveState("chartOpen", !chartOpen)}>
                <DropdownToggle caret color="warning">
                  {chart}
                </DropdownToggle>
                <DropdownMenu
                  className="mb-2"
                >
                  {
                    ["Pie Chart", "Line Chart", "Bar Chart"].map((item, index) => {
                      return (
                        <DropdownItem key={index} tag="a" active={chart === item} onClick={() => saveState("chart", item)}>
                          {
                            item
                          }
                        </DropdownItem>
                      )
                    })
                  }
                </DropdownMenu>
              </Dropdown>
              </div>
          <br />
          {
            renderChart(data, chart)
          }
        </Col>
      </Row>
    </CardBody>
  </Card>
);

const renderChart = (data, name) => {
  switch (name) {
    case "Pie Chart":
      return (
        <PieChart data={data} />
      );
    case "Line Chart":
      return (
        <LineChart data={data} />
      );
    case "Bar Chart":
      return (
        <BarChart data={data} />
      );
    default:
      return (
        <PieChart data={data} />
      );
  }
}

class Default extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      residential_units: [],
      bills: [],
      isOpen: false,
      chartOpen: false,
      active: "Telemach",
      chart: "Pie Chart"
    };
  }

  fetchData = () => {
    let user_id = jwt_decode(localStorage.getItem("access_token")).data.user_id;
    axios.get(config.BASE_URL + "/residential_units/" + user_id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("access_token")
      }
    }).then(response => {
      if (response.data && response.data.residential_units) {
        this.setState({
          residential_units: response.data.residential_units
        });
      }
    }).catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  saveState = (name, state) => {
    this.setState({
      [name]: state
    });
  }

  render() {

    const { residential_units } = this.state;

    return (
      <Container fluid className="p-0">
        <Statistics residential_units={residential_units && residential_units.length ? residential_units.length : 0} />
        {
          residential_units && residential_units.length &&
          residential_units.map((item, index) => {
            return (
              <Row key={index}>
                <Col lg="12">
                  <ResidentialUnitCard
                    location={item}
                    isOpen={this.state.isOpen}
                    chartOpen={this.state.chartOpen}
                    active={this.state.active}
                    saveState={this.saveState}
                    chart={this.state.chart}
                  />
                </Col>
              </Row>
            )
          })
        }
      </Container>
    );
  }
}

export default Default;
