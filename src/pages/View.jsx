import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {

    const [item,setItem]=useState({})

    const {id}=useParams()
    console.log(id)



    useEffect(()=>{
        const products=JSON.parse(localStorage.getItem('products'))
        setItem(products.find(pro=>pro.id==id))
    },[])

    console.log(item)
 


    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={item?.thumbnail} alt="..." /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">ID :{item?.id}</div>
                            <h1 className="display-5 fw-bolder">{item.title}</h1>
                            <div className="fs-5 mb-5">
                                <span>${item?.price}</span>
                            </div>
                            <p className="lead">{item?.description}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: '3rem' }} />
                                {/* <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default View