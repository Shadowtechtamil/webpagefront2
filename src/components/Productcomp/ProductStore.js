import React, { useEffect, useState } from 'react'
import './ProductStore.css';
import product from '../../assets/product.JSON';
import Modal from './ProductModal';

const ProductStore = () => {
    const[Products,setProducts]=useState([]);

    useEffect(()=>
  {
   const fetchData=async ()=>
   {
    try
    {
      const response=await fetch(product);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      // setPageloaderror(false);
      setProducts(data.product);
    }
    catch(error)
    {
      console.log(error);
    }
   }
   fetchData();
  },[]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct,setselectdProduct]=useState(null);
  
  
    const openModal = (product) => {
      setselectdProduct(product);
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    };
  
    const closeModal = () => {
      setShowModal(false);
      document.body.style.overflow = '';
    };



  return (
    <div className='Store-container'>
        <h1>PRODUCTS CORNER</h1>
        <div className='store-content'>
            {Products.map(product=>(
        <div className='Product-card' key={product.id}>
          <div className='product-img shine'>
          <img src={product.primage} alt='zb-mouse'></img>
          </div>
          <div className='product-cat'>
              <span>{product.prcat}</span>
          </div>
          <div className='product-info'>
                <h4>{product.prname}</h4>
                <div className='pr-meta'>
                  <h4 className='price'><i class="fa-solid fa-indian-rupee-sign"></i> {product.prprice}</h4>
                  <button className='prd-knm-btn' onClick={() => openModal(product)}><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
          </div>
        </div>
        ))}
        </div>
        {showModal && <Modal closeModal={closeModal} productdata={selectedProduct} />}
    </div>
  )
}

export default ProductStore