import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function ResetPassword() {
  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h1 className="h2">Reset password</h1>
        <p className="lead">Enter your email to reset your password.</p>
      </div>

      <Card>
        <CardBody>
          <div className="m-sm-4">
            <Form>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </FormGroup>
              <div className="text-center mt-3">
                <Link to="/">
                  <Button color="primary" size="lg">
                    Reset password
                  </Button>
                </Link>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default ResetPassword;
