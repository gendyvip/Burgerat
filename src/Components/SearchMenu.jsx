import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Context } from '../Context/Contexts';
import StoreCards from './StoreCards';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { isEmptyArray } from 'formik';

export default function SearchMenu() {
  let [searchKey,setSearchKey]=useState("");
  let [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/data").then((response) => {
      setItems(response.data.menu_items)
    }).catch((error) => {
      console.log("Errors are ", error)
    })
  }, [items])

let [filteredList,setFilteredList]=useState(items);


let getSearchKey=(e)=>{
  setSearchKey(e.target.value);
}

let list=filteredList.map((item)=>{
  return( 
    <StoreCards item={item} key={item.id} />
  )
  })


useEffect(()=>{
  let foundedList=items.filter((item)=>(item.en_title).includes(searchKey) || (item.en_title).toLowerCase().includes(searchKey))
  setFilteredList(foundedList)
},[filteredList])

if(isEmptyArray(list))
  return( 
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={getSearchKey} type="text" placeholder="Search menu item" />
      </Form.Group>
      <div className="d-flex justify-content-center">
      </div>
    </Form>
    {list}
    <div style={{height:"410px"}} className="col-md-6 m-auto">
  <Alert className='mt-5'  variant="danger">
  <Alert.Heading><h1 className='text-center'>404 Not Found</h1></Alert.Heading>
  <p className='text-center'>
      We can't find what you are looking for.
  </p>
</Alert>
</div>
</>
  )

  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={getSearchKey} type="text" placeholder="Search menu item" />
      </Form.Group>
      <div className="d-flex justify-content-center">
      </div>
    </Form>
    {list}
</>
  )
}
