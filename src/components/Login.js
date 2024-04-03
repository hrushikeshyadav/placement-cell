import React from "react";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import axiosInstance from "../api";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const onFormSubmit = (e) => {
    const {
      target: { email, password },
    } = e;
    e.preventDefault();
    const data = {
      email: email.value,
      password: password.value,
    };
    axiosInstance.post("/students/login", data).then((res) => {
      const {
        data: { token },
      } = res.data;
      localStorage.setItem("token", token);
      history.replace("/dashboard");
    });
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
