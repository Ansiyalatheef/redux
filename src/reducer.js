import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from "./actions";
import cartItems from "./cart-items";
import CartItem from "./components/CartItem";

function reducer(state,action){
  if(action.type === CLEAR_CART){
    return{...state,cart:[]
    }}
    if(action.type===REMOVE){
      return{
        ...state,
        cart:state.cart.filter((item)=>item.id!==action.payload.id)
      }
    }
    if(action.type ===INCREASE){
      let tempCart =state.cart.map((cartItem)=>{
        if(cartItem.id === action.payload.id){
          cartItem={...cartItem,amount:cartItem.amount+1}
        }
        return cartItem
      })
      return{
        ...state,
        cart:tempCart,
      }
    }
    if(action.type === DECREASE){
      let tempCart =[];
      if(action.payload.amount ===1){
        tempCart=state.cart.filter((item)=>item.id !==action.payload.id);
      }else{
        tempCart=state.cart.map((cartItem)=>{
          if(cartItem.id ===action.payload.id){
            cartItem={...cartItem,amount:cartItem.amount-1};
          }
          return cartItem;
        })
      }
      return{
        ...state,
        cart:tempCart
      }
    }
    if(action.type === GET_TOTALS){
      let{total,amount}=state.cart.reduce(
        (cartTotal,cartItem)=>{
          const{price,amount}=cartItem;
          const itemTotal =price * amount;
          cartTotal.total+= itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {total:0,amount:0}//cartTotal
      );
      total = total.toFixed(2);
      return{...state,amount,total}
    }
    return state
  }
    
    // console.log({state,action});
    // if(action.type ==="DECREASE"){
    //   //state.count=state.count-1
    //   return{...state,count:state.count-1}
    // }if(action.type ==="INCREASE"){
    //   return{...state,count:state.count+1}
    // }if(action.type ==="RESET"){
    //   return{...state,count:0}
    // }
    // if(action.type ==="CHANGE_NAME"){
    //   return{...state,name:"airahchu"}
    // }
   
  
  export default reducer;