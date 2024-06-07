import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartContainer from './components/CartContainer';
import CartItems from './cart-items';
import{legacy_createStore as createStore} from "redux";
import reducer from "./reducer"
import{INCREASE,DECREASE,REMOVE} from "./actions"
import cartItems from './cart-items';
import {Provider} from"react-redux";
function App() {
const initialStore={
  cart:cartItems,
  total:0,
  amount:1
};

 // const initialStore={
    //count:55,
   // name:"ansiya"
  //};

  const store=createStore(reducer,initialStore);
  //store.getState()
  // store.dispatch({type:"DECREASE"});
  // store.dispatch({type:"DECREASE"});
  // store.dispatch({type:"DECRESE"});//here returns current state not count-1 bcz error in typing decrese
  // store.dispatch({type:"INCREASE"});
  // store.dispatch({type:"RESET"});
  // store.dispatch({type:"CHANGE_NAME"});
  // console.log(store.getState());
  return (

   
    <Provider store ={store}>
<NavBar/>
<CartContainer/>


    {/* <NavBar cart={store.getState()}/>
    <CartContainer cart={CartItems}/> */}
    </Provider>
   
  );
}

export default App;
