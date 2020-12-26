import React, { useState, useContext } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import { Context } from "./Context";

const ItemModal = ({ item }) => {
  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Context
  const { cart } = useContext(Context);
  const [cartValue, setCart] = cart;

  const { onAdd, onRemove } = useContext(Context);

  return (
    <>
      <Button variant="outline-info" onClick={handleShow} className="mt-3">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col lg={10}>
              <p className="text-left mt-3">{item.name}</p>
            </Col>
            <Col lg={2}>
              <p className="text-left mt-3">
                {" "}
                {!item.quantity ? (
                  <>
                    <p>Not available</p>
                  </>
                ) : (
                  <>Qty: {item.quantity}</>
                )}
              </p>
            </Col>
          </Row>
        </Container>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col sm={8}>{item.description}</Col>
            <Col sm={4}>
              <div className="d-flex flex-column">
                <h4>$ {item.price}</h4>
                {!item.quantity ? (
                  <h6>Out of stock</h6>
                ) : (
                  <>
                    <p>Stock: {item.quantity}</p>
                    <Button
                      variant="success"
                      onClick={() => {
                        onAdd(item._id);
                      }}
                    >
                      add to cart
                    </Button>
                  </>
                )}
                {cartValue.includes(item._id) ? (
                  <>
                    <Button
                      variant="warning"
                      onClick={() => {
                        onRemove(item._id);
                      }}
                    >
                      remove from cart
                    </Button>
                    <p>
                      This item is in cart:{" "}
                      {
                        cartValue.filter((elem) => {
                          return elem == item._id;
                        }).length
                      }
                    </p>
                  </>
                ) : (
                  <>{null}</>
                )}
              </div>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemModal;
