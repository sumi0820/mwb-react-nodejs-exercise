import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import { API_URL } from "../config";

export const Context = createContext();

export const Provider = (props) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('')
  const [cart, setCart] = useState([]);
  const [tabCheck, setTabCheck] = useState(false);

  // Alert
  const [alert, setAlert] = useState(false);
  const handleShowAlert = () => setAlert(true);
  const handleCloseAlert = () => setAlert(false);
  

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    localStorage.setItem("CartInLocalStorage", cart);

    return () => {
      localStorage.removeItem("CartInLocalStorage", cart);
    };
  }, [cart]);

  const fetchItems = async () => {
    try {
      const data = await axios.get(`${API_URL}`).then((res) => {
        setItems(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async (itemId) => {
    let itemInLocal = localStorage.getItem("CartInLocalStorage")
      ? localStorage.getItem("CartInLocalStorage").split(",")
      : [];
    if (
      itemInLocal.length == cart.length ||
      (!itemInLocal.length && !cart.length)
    ) {
      try {
        const res = await axios.post(`${API_URL}/${itemId}/dec`);
        setItems(res.data);

        let cloneCart = JSON.parse(JSON.stringify(cart));
        cloneCart.push(itemId);
        setCart(cloneCart); 

      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.post(`${API_URL}/${itemId}/dec`);
        setItems(res.data);

        let newCart = [itemId, ...itemInLocal];
        setCart(newCart);

        setItem(itemId)
        handleShowAlert()

      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleRemove = async (itemId) => {
    let itemInLocal = localStorage.getItem("CartInLocalStorage")
      ? localStorage.getItem("CartInLocalStorage").split(",")
      : [];
    if (
      itemInLocal.length == cart.length ||
      (!itemInLocal.length && !cart.length)
    ) {
      let index = cart.indexOf(itemId);

      if (index !== -1) {
        try {
          const res = await axios.post(`${API_URL}/${itemId}/inc`);
          setItems(res.data);
          let cloneCart = JSON.parse(JSON.stringify(cart));
          cloneCart.splice(index, 1);
          setCart(cloneCart);
          setTabCheck(false);
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      try {
        const res = await axios.post(`${API_URL}/${itemId}/inc`);
        setItems(res.data);
        let newCart = [itemId, ...itemInLocal];
        setCart(newCart);
        handleShowAlert()
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        items: [items, setItems],
        item: [item, setItem],
        cart: [cart, setCart],
        tabCheck: [tabCheck, setTabCheck],
        alert:[alert, setAlert],
        onAdd: handleAdd,
        onRemove: handleRemove,
        onShowAlert:handleShowAlert,
        onCloseAlert:handleCloseAlert
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
