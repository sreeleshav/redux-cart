import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart,increase,decrease,checkout } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'



function Cart() {

  const {cart} = useSelector((state)=>state.cartReducer)

  const dispatch=useDispatch()

  const nav=useNavigate()

  const handleCheckout=()=>{
    dispatch(checkout)
    nav('/')
    alert("Cart Checked Out!!")


  }

  return (
    <>
      <div className="row p-1">
        <div className="col-8">
          <h3>Cart summery</h3>
          {
            cart?.length > 0 ?
            <table className="table table-bordered shadow">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cart?.map(item=>(
                  <tr>
                  <td>{item?.id}</td>
                  <td>{item?.title}</td>
                  <td>
                    <img src={item?.thumbnail} width={'50%'} alt="" />
                  </td>
                  <td>
                    <button className='btn'onClick={()=>dispatch(increase(item?.id))}>+</button>
                    <input type="text" value={item?.quantity} readOnly className="form-control w-25" />
                    <button className='btn'onClick={()=>dispatch(decrease(item?.id))}>-</button>
                  </td>
                  <td>{item?.price}</td>
                  <td>
                    <button className='btn'onClick={()=>dispatch(removeFromCart(item?.id))}>
                      <i className="fa-solid fa-trash" style={{ color: "#d5071b", }} />
                    </button>
                  </td>
                </tr>

                ))
              }
           
            </tbody>
          </table>
          :
          <h3>no cart added</h3>
              
          }
         
             
        </div>
        <div className="col-4">
            <div className="border shadow bg-light mt-5 p-4">
              <h4 className='text-danger'>Total Products :{cart?.length}</h4>
              <h4 className='text-danger'>Total Amount : {cart?.reduce((prev,item)=>prev+(item.price*item.quantity),0)}</h4>
            </div>
            <div className='d-grid mt-4'>
                <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart