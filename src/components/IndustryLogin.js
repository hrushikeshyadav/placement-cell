import React from "react";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";

const IndustryLogin = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
  };
  return (
    <div className="login">
      <Card className="login-card">
        <Form onSubmit={onFormSubmit}>
          <FormGroup>
            <Label for="exampleName">Industry Name</Label>
            <Input
              id="exampleName"
              name="name"
              placeholder="name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Industry Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="email"
              type="email"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    </div>
  );
};

export default IndustryLogin;
