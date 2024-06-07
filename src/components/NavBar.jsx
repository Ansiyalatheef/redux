import React from 'react'
import { connect, useSelector } from 'react-redux';

// const NavBar = ({amount}) => {
    const NavBar = () => {
    // const {count}=cart
    const amount=useSelector((state)=>state.amount)
  return (
    <nav>
        <div className='nav-center'>
            <h3>Redux Project</h3>
            <div className='nav-container'>
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>

            </div>
        </div>
      
    </nav>
  )
}
// const mapStateToProps=(state)=>{
//     return {amount:state.amount};

// }

// export default connect(mapStateToProps)(NavBar);
export default NavBar