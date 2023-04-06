import React from 'react'

 export function addtocart(data) {
  // console.log(data);
    return ({
      type:"ADD_To_CART",
      payload:data,
    })
}


export function deltocart(id) {
  // console.log(data);
    return ({
      type:"DEL_To_CART",
      payload:id,
    })
}
export const REMOVE = (iteam) => {
  return {
      type: "RMV_ONE",
      payload: iteam
  }
}