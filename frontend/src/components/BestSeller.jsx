import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titel from './Titel';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products}= useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {     
            const bestProduct = products.filter((item) => item.bestSeller || item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]);

  return (
    <div className='my-10'>
        <div className='py-8 text-center text-3xl'>
            <Titel text1={'BEST '} text2={'SELLERS'} />
            <p className='w-3/4 text-xs m-auto sm:text-sm md:text-base text-gray-600'>
            "Explore our Bestsellers – the most loved and trending styles, handpicked just for you!"           
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>

    </div>
  )
}

export default BestSeller