import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  // CustomInput
} from "reactstrap";

import avatar from "../../assets/img/logo1.png";

import * as config from "../../redux/constants";

class SignIn extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      username_or_email_address: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post(config.AUTH_URL + "/login", JSON.parse(JSON.stringify(this.state)), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if(response.data && response.data.jwt) {
        localStorage.setItem("access_token", response.data.jwt);
        console.log(response.data.message);
        this.props.history.push("/");
      } else {
        console.log(response.data.message);
      }
    }).catch(error => {
      console.log(error);
    })
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-center mt-4">
          <h2>Welcome to RacunNinja</h2>
          <p className="lead">Sign in to your account to continue</p>
        </div>
  
        <Card>
          <CardBody>
            <div className="m-sm-4">
              <div className="text-center">
                <img
                  src={avatar}
                  alt="logo"
                  className="img-fluid"
                />
              </div>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>Username / Email</Label>
                  <Input
                    size="lg"
                    type="text"
                    name="username_or_email_address"
                    value={this.state.username_or_email_address}
                    onChange={this.handleUpdate}
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    size="lg"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleUpdate}
                    placeholder="Enter your password"
                  />
                  <small>
                    <Link to="/auth/reset-password">Forgot password?</Link>
                  </small>
                </FormGroup>
                <div className="text-center mt-3">
                    <Button type="submit" color="primary" size="lg">
                      Sign in
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

export default SignIn;
