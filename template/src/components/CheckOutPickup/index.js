import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export const CheckOutPickup = props => {
  const [name, setName] = React.useState("");
  const [telephone, setTelephone] = React.useState("");

  const saveOrder = item => {
    let cartArr = JSON.parse(localStorage.getItem("myCart") || "[]");

    let json = {
      name: name,
      telephone: telephone,
      confirmed: false,
      cart: cartArr
    };
    localStorage.setItem(telephone, JSON.stringify(json));
    window.location.href = `${window.location.origin}/cart/confirm/${telephone}`;
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={value => setName(value.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Telephone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Telephone"
          value={telephone}
          onChange={value => setTelephone(value.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={e => {
          e.preventDefault();
          saveOrder();
        }}
      >
        Submit
      </Button>
    </Form>
  );
};
