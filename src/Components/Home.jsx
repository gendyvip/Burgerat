import React, { useContext, useEffect, useState } from 'react';
import Carousal from './Carousal';
import Row from 'react-bootstrap/Row';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StoreCards from './StoreCards';
import { Context } from '../Context/Contexts';

export default function Home() {
  let { items } = useContext(Context);

  let list = items.map((item) => {
    if ((item.menuCategoryId == 2) && item.is_combo)
    return (
      <StoreCards item={item} key={item.id}  />
    )
})

return (
  <><Row className='m-2'>
    <Carousal />
  </Row>
    <Row className='m-5'>
      {list}
      <a href='/store' className='viewmenu mt-3 text-uppercase text-decoration-none text-dark' style={{ fontSize: "17px" }}>View Menu <ArrowRightAltIcon style={{ fontSize: "30px" }} /> </a>
    </Row></>
)
}
