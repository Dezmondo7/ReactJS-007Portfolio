import React from "react";
import { FaShoppingCart, FaRegBookmark, FaFireAlt, } from 'react-icons/fa';

function Cards(props) {
    return(
        <div className='productList'>
            <div key={props.id} className='productCard'></div>
            <img src={props.image} alt="" className="productImage"></img>

            <FaShoppingCart className={"productCard__cart"} />
            <FaRegBookmark className={"productCard__wishlist"} />
            <FaFireAlt className={"productCard__fastSelling"} />

            <div className='productcard__content'>
                <h3 className='productName'>{props.name}</h3>
                <div className='displaystack__1'></div>
                <div className='productProce'>${props.price}</div>
                <div className='productSales'>{props.totalSales} units sold</div>
            </div>    
            <div className='displayStack__2'>
                <div className='productTime'>{props.timeLeft} days left</div>
            </div>
            </div>
    )
}
export default Cards; 