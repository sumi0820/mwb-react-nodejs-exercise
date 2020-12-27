import React, { useContext } from "react";
import { Nav, Container } from "react-bootstrap";
import { Context } from "./Context";

const Navbar = () => {
  const { cart } = useContext(Context);
  const [cartValue, setCart] = cart;

  return (
    <Nav className="mt-2">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav.Item>
          <h2>Test application</h2>
        </Nav.Item>
        <Nav.Item>
          <h5 className="mt-3">Total in cart: {cartValue.length} items(s)</h5>
        </Nav.Item>
      </Container>
    </Nav>
  );
};

export default Navbar;
