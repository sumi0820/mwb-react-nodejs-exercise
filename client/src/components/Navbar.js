import React, { useState, useContext } from "react";
import { Nav, Container } from "react-bootstrap";
import { Context } from "./Context";

const Navbar = () => {
  const { cart } = useContext(Context);
  const [cartValue, setCart] = cart;

  console.log("cart Val: ",cartValue);
  return (
    <Nav bg="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav.Item>
          <h2>Test application</h2>
        </Nav.Item>
        <Nav.Item>
          <p className="mt-3">Total in cart: {cartValue.length} items(s)</p>
        </Nav.Item>
      </Container>
    </Nav>
  );
};

export default Navbar;
