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

{/* <div className="row justify-content-center h-100 overflow-auto">
  <div className="col-12 col-lg-8 col-xxl-6">
    <table className="table">
      <tbody className="">
        <tr>
          <td>
            <input className='form-check-input mt-075' type="checkbox" />
          </td>
          <td className='align-middle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </td>
          <td className='text-end'>
            <button type="button" className='btn btn-outline-danger'>
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div> */}

{/* <div className="h-50"> */}
{/* <div className="h-100"> */}
      
{/* <div className="row justify-content-center">
  <div className="col-12 col-md-9">
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons"/>
      <button className="btn btn-outline-secondary" type="button">B</button>
    </div>
  </div>
</div> */}

{/* <div className="row g-0" style={{height: "38px"}}>
  <div className="col">
    <input className="form-check-input m-0 p-0 h-100 w-100" type="checkbox" value=""/>
  </div>
  <div className="col h-100 w-100">
    <p className="text-start h-100">qwrqerqerqrqwrqwe</p>
  </div>
  <div className="col h-100 w-100">
    <button className="btn btn-outline-secondary h-100" type="button">B</button>
  </div>
</div> */}


{/* <div className="row justify-content-center mb-3">
  <div className="col-12 col-lg-8 col-xxl-6 d-flex">
    <div className='flex-grow-1 mx-2'>
      <input type="text" className="form-control" placeholder="Recipient's username"/>
    </div>
    <button className="btn btn-outline-primary mx-2" type="button">
      <i className="fa-solid fa-plus"></i>
    </button>
  </div>
</div> */}
