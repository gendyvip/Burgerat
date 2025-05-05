import React, { useContext, useState } from 'react'
import { Context } from '../Context/Contexts';
import StoreCards from './StoreCards';
import SearchMenu from './SearchMenu'

export default function Store() {
    let { items } = useContext(Context);

  return (
    //  <StoreCards item={item} key={item.id} />
    <SearchMenu/>
  )
}



