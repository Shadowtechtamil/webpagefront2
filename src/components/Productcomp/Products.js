import React, { useEffect, useState } from 'react'
import '../compCss/Products.css';
import product from '../../assets/product.JSON';
import 'react-multi-carousel/lib/styles.css';
import '../compCss/slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Modal from './ProductModal';

const Products = () => {
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
    const recentdata=data.product;
    setProducts(recentdata.slice(0,4));
  }
  catch(error)
  {
    console.log(error);
  }
 }
 fetchData();
},[]);

const slider = React.useRef(null);
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


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
    <div className='Product-container'>
     <h1>Gaming </h1>
     <p id='pr-para'>These are handpicked products personally tested by our team for an enhanced gaming experience. From controllers to Laptops, we've got the gear to level up your play!</p>
        <div className='arrowbtn'>
          <button className='btnleft' onClick={() => slider?.current?.slickPrev()}><i class="fa-solid fa-chevron-left"></i></button>
          <button className='btnright' onClick={() => slider?.current?.slickNext()}><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      <Slider ref={slider} {...settings} className='Product-section'>
          
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
      </Slider>
      {showModal && <Modal closeModal={closeModal} productdata={selectedProduct} />}
    </div>
  )
}

export default Products