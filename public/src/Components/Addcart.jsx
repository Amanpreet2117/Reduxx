import React from 'react'
import "./Addcart.css"
import { useSelector } from 'react-redux';

function Addcart() {
    const mydata=useSelector((state)=>state.carddata)
    console.log("addcart",mydata[0]);

    return (
        <div className="container">
            <div className="row">
                this is my india
                <a href=""><i class="fa-regular fa-cart-shopping">{mydata.length}</i></a>
            </div>
        </div>
    )
}

export default Addcart
