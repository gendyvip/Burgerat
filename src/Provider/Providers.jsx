import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Context } from "../Context/Contexts";


export default function Providers(props) {
  let [totalCount, setTotalCount] = useState(0);
  let [show, setShow] = useState(false);
  let [items, setItems] = useState([]);
  let [addToCart, setAddToCart] = useState({});
  let [key, setKey] = useState("");



  useEffect(() => {
    axios.get("https://gendyvip.github.io/Burgerat/db.json").then((response) => {
      setItems(response.data.data.menu_items)
    }).catch((error) => {
      console.log("Errors are ", error)
    })
  }, [items])

  useEffect(() => {
  },[addToCart])

let values = {
  totalCount, setTotalCount, items, setAddToCart, addToCart, show, setShow, key, setKey
}

return (
  <Context.Provider value={values}>
    {props.children}
  </Context.Provider>
)
}
