import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../Actions/Action';
// import { useContext } from 'react';



function Dataapi(props) {
    const[post,setpost]=useState([]);
    // const[serial,setserial]=useState(0)
    const mydata=useSelector((state)=>state.carddata.cartdata)
    console.log("lenght",mydata.length);
    // setserial(mydata.length);
    const dispatch=useDispatch();
    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((ddata)=>{
            return ddata.json();
        }).then((data)=>{
            setpost (data.products);
        })
    },[])

        console.log("data",post);
        const send = (e)=>{
            // console.log(e);
            dispatch(addtocart(e));
          }
// console.log("num",serial);


    return (
    
        <div className="container">
            <div className="row">
                {post.map((result,k)=>(

               <div className="col-lg-4 border">
                <p><b>ID:</b>{result.id}</p>
                <p><img src={result.images[0]}alt="" width="100%"height="200px"/></p>
                <p><b>Title:</b>{result.title}</p>

                <p><b>description:</b>{result.description}</p>
                <p><b>price:</b>{result.price}</p>
                <p><b> discountPercentage:</b>{result.discountPercentage}</p>
                <p><b> qnty:</b>{1}</p>

                {/* <button className='btn btn-primary'onClick={()=>{props.addToCartHandler({id:result.id})}
                        }>add to card</button> */}
              <button className='btn btn-primary'onClick={()=> send(result)}
                            // id:result.id,
                            // img:result.images[0],
                            // title:result.title,
                            // description:result.description,
                            // price:result.price,
                            // discountPercentage:result.discountPercentage,
                            // qnty:1,
                            // serial:mydata.length
            >ADD card</button> 
                </div>
))}


        
            </div>
        </div>
        
    )
}

export default Dataapi
