import React from 'react'
import './ProductModal.css';
import Star from './Star';
const ProductModal = ({productdata,closeModal}) => {
  return (
    <div className='product-modal-container'>
            <div className='modal-content'>
                <div className='prmodal-header'>
                  <span className="close" onClick={closeModal}>&times;</span>
                  <h2>Product Details</h2>
                </div>
                <div className='m-c-details'>
                  <div className='mc-left'>
                        <div className='mc-left-img'>
                          <img src={productdata.primage} alt='Product'/>
                        </div>
                        <h3>{productdata.prname}</h3>
                        <span className='price'><i class="fa-solid fa-indian-rupee-sign"></i> {productdata.prprice}</span>
                        <span className='pr-disclimer'>*Prices may vary on respective Platforms.</span>
                  </div>
                  <div className='mc-right'>
                  <p>{productdata.prdetails}</p>
                  <p id="rating">Our Team Rating  <Star rating={productdata.prrating} /></p>
                  <div className='Buying-options'>
                    <h2>Buying Links</h2>
                    <p>Amazon:- <span><a href={productdata.pramazon} target='_blank' rel='noreferrer'>Buy Now <i class="fa-solid fa-cart-shopping"></i></a></span></p>
                    <p>Flipkart:- <span><a href={productdata.prflipkart} target='_blank' rel='noreferrer'>Buy Now <i class="fa-solid fa-cart-shopping"></i></a></span></p>
                  </div>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default ProductModal