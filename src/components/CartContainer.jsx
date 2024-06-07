import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { connect, useSelector ,useDispatch} from 'react-redux'
import { CLEAR_CART, GET_TOTALS } from '../actions'
const CartContainer = () => {
    const cart=useSelector((state)=>state.cart);
    const total=useSelector((state)=>state.total);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch({type:GET_TOTALS})
    });
    if (cart.length === 0){
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            
            </section>
          )
    }
 return(
    <section className='cart'>
        <header>
            <h2>Your Bag</h2>
            <article>
                {cart.map((item)=>{
                    return <CartItem key={item.id}
                    {...item} />
                })}
            </article>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total<span>Rs{total}</span>
                    </h4>
                </div>
                <button onClick={()=>dispatch({type:CLEAR_CART})} className='btn clear-btn'>clear cart</button>
            </footer>
            
        </header>
    </section>
 )
}
// const mapStateToProps=(store)=>{
//     const{cart,total}=store;
    
//        return {cart:cart,total:total};or return{cart,total}
    
//}
//export default connect (mapStateToProps)(CartContainer);
export default CartContainer;