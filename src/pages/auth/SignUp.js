import React from "react";

import axios from "axios";
import * as config from "../../redux/constants";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import avatar from "../../assets/img/logo1.png";

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email_address: "",
      mobile_number: "",
      username: "",
      password: "",
      re_password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post(config.AUTH_URL + "/register", JSON.parse(JSON.stringify(this.state)), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if(response.data && response.data.success) {
        console.log(response.data.message);
        this.props.history.push("/auth/sign-in");
      } else {
        console.log(response.data.message);
      }
    }).catch(error => {
      console.log(error);
    })
  }

  render() {

    const { name, email_address, mobile_number, username, password, re_password } = this.state;

    return (
      <React.Fragment>
        <div className="text-center mt-4">
          <img
            src={avatar}
            alt="logo"
            className="img-fluid"
          />
          <br />
          <br />
          <h1 className="h2">Get started</h1>
          <p className="lead">
            Bill management, simplified.
        </p>
        </div>

        <Card>
          <CardBody>
            <div className="m-sm-4">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    size="lg"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Enter your full name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    size="lg"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    placeholder="Enter your username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    size="lg"
                    type="email"
                    name="email_address"
                    value={email_address}
                    onChange={this.handleChange}
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Company</Label>
                  <Input
                    size="lg"
                    type="text"
                    name="mobile_number"
                    value={mobile_number}
                    onChange={this.handleChange}
                    placeholder="Enter your mobile number"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    size="lg"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    placeholder="Enter password"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    size="lg"
                    type="password"
                    name="re_password"
                    value={re_password}
                    onChange={this.handleChange}
                    placeholder="Enter your password again"
                  />
                </FormGroup>
                <div className="text-center mt-3">
                    <Button type="submit" color="primary" size="lg">
                      Sign up
                  </Button>
                </div>
              </Form>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );

  }

}

export default SignUp;
