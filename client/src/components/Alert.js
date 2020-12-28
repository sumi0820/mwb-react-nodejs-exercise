import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { Context } from "./Context";

const Alert = () => {
  const { alert } = useContext(Context);
  const [alertValue, setAlert] = alert;

  const { cart } = useContext(Context);
  const [cartValue, setCart] = cart;

  const { items } = useContext(Context);
  const [itemsValue, setItems] = items;

  const { item } = useContext(Context);
  const [itemValue, setItem] = item;

  const { onCloseAlert } = useContext(Context);

  const alertedItem = itemsValue.filter(
    (originalItem) => itemValue == originalItem._id
  );

  const itemInCart = cartValue.filter((cartItem) => itemValue == cartItem);

  return (
    <>
      {!itemValue ? null : (
        <Modal show={alertValue} onHide={onCloseAlert}>
          <Modal.Header closeButton>
            <Modal.Title>You open multiple tabs/windows:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {alertedItem[0].name} changed to {itemInCart.length}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCloseAlert}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Alert;
