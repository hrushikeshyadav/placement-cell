import React from "react";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
  };
  return (
    <div className="login">
      <Card className="login-card">
        <Form onSubmit={onFormSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password"
              type="password"
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
