import React from "react";
import { Form, Button } from "react-bootstrap";

export const CheckOutForm = props => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="tel" placeholder="Telephone" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Postal code</Form.Label>
        <Form.Control type="number" placeholder="Postal Code" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
