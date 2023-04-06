import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { addtocart } from '../Actions/Action'
import { REMOVE } from '../Actions/Action'

import { deltocart } from '../Actions/Action'
function Viewredux() {
    // const [post,setpost]=useState()
    const [price,setPrice] = useState(0);

      const dispa=useDispatch();
    const mydata=useSelector((state)=>state.carddata.cartdata)
    
    // console.log("viewredux",mydata.cartdata)/
    // console.log("viewpoint",post);
    const dlt = (id)=>{
      dispa(deltocart(id));
      // history("/");
  }
  const send = (e)=>{
    // console.log(e);
    dispa(addtocart(e));
  }
  const total = ()=>{
    let price = 0;
    mydata.map((ele,k)=>{
        price = ele.price * ele.qnty + price
    });
    setPrice(price);
};
useEffect(()=>{
  total();
},[total])
const remove = (item)=>{
  dispa(REMOVE(item))
}
  
   
    return (
        <div className="container">
            <div className="row ">
            <table class="table mt-5">
  <thead >
    <tr style={{textAlign:"center"}} >
      <th scope="col"><b>Serial no.</b></th>
      <th scope="col"><b>Products</b></th>
      <th scope="col" ><b>Product details</b></th>
      <th scope="col" ><b>Amount</b> ($):</th>
    </tr>
  </thead>
  <tbody className="ammuu3 "style={{marginTop:"5px"}}>
    {mydata.map((result)=>(
    <tr className="ammuu3 " >
      <th className="ammuu1" scope="row" >{mydata.length}.</th>
      <td className="ammuu ">
      <img src={result.images[0]} alt="apna" width="90%"height="300px" marginTop="30px" marginBottom="30px" />
      </td>
      <td className="" >
      <p><b>ID:</b>{result.id}</p>
      <p><b>Title:</b>{result.title}</p>
      <p><b>description:</b>{result.description}</p>
      <p><b> discountPercentage:</b><del>{result.discountPercentage} $</del></p>
      <p onClick={()=>dlt(result.id)}><i class="fa-solid fa-trash"></i></p>
      </td>
      <td className="ammuu2">
      <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:70,cursor:"pointer",background:"#ddd",color:"#111"}}>

      <p><span style={{fontSize:24}} onClick={result.qnty <=1 ? ()=>dlt(result.id) : ()=>remove(result)}>-</span> &nbsp;&nbsp;<b style={{fontSize:24}}>{result.qnty}</b> &nbsp;<span style={{fontSize:24}} onClick={()=> send(result)}>+</span></p> <br/><br/><br/>
      </div>
      <p><b>price:</b>{result.price} $</p>
      <p><b>totalprice this item:</b>{result.price*result.qnty} $</p>


      </td>
    </tr>
    ))}
   
  </tbody>
  <br/>
  <br/>
 
  <p className="ammu5"><b>Total Amonut:</b>{price} $</p>
  <br/>
  <br/>
  <button className='btn btn '>Buy now</button>

</table>
            </div>
        </div>
    )
}

export default Viewredux
// {mydata.map((result)=>(
//     <div class="container text-center mt-5 ">
//     <div class="row ammu">
//       <div class="col py-5">
//         <p><img src={result.cartdata..cartdata.img} alt="apna" width="80%"height="200px" /></p>
//       </div>
//       <div class="col ">
        
//       </div>
//       <div class="col ">
//         Column
//       </div>
//     </div>
//   </div>
//  ))}