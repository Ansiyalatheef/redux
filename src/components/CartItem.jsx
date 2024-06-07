import React from 'react'
import { DECREASE, INCREASE, REMOVE } from '../actions';
import { connect } from 'react-redux';

const CartItem = ({img,title,price,amount,remove,increase,decrease}) => {
  return (
    <div className='cart-item'>
        <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>Rs {price}</h4>
                <button onClick={()=>remove} className='remove-btn'>remove</button>

            </div>
            <div>
                <button onClick={()=>increase()} className='amount-btn'>Add</button>
                <p className='amount'>{amount}</p>
                <button onClick={()=>decrease()}className='amount-btn'>Sub</button>
            </div>
        
      

    </div>
  )
}

const mapDispatchToProps =(dispatch,ownProps)=>{
  const{id,amount}=ownProps;
  return{
    remove:()=>dispatch({type:REMOVE,payload:{id}}),
    increase:()=>dispatch({type:INCREASE,payload:{id}}),
    decrease:()=>dispatch({type:DECREASE,payload:{id,amount}})

  };
  };

export default connect(null,mapDispatchToProps)(CartItem)
