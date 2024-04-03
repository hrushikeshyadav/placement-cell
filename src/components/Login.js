import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Login;
