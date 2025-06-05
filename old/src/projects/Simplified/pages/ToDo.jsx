// import './App.css';

import { useRef, useState } from 'react';

import Form from '../layouts/Form';
import List from '../layouts/List';

function ToDo() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const inputRefNewItem = useRef(null)

  const listProps = {
    newItem: newItem, 
    setNewItem: setNewItem, 
    items: items, 
    setItems: setItems, 
    inputRefNewItem: inputRefNewItem
  }

  return (
    <>
      <Form {...listProps}></Form>
      <List {...listProps}></List>

    </>
  );

}

export default ToDo;
