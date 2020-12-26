import React, { useContext } from "react";
import ItemModal from "./ItemModal";
import { Context } from "./Context";
import { Container } from "react-bootstrap";
import Alert from "./Alert";

const ItemList = () => {
  const { items } = useContext(Context);
  const [itemsValue, setItems] = items;

  return (
    <Container className="mt-4">
      <div className="d-flex flex-column">
        {itemsValue.map((item) => {
          return <ItemModal item={item} key={item._id} />;
        })}
        <Alert />
      </div>
    </Container>
  );
};

export default ItemList;
