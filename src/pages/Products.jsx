import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'

const Products = () => {
    const {products} = useContext(ProductContext)
  return (
    <section className='pt-[80px] pb-16 min-h-[800px] lg:pt-[7%]'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
        {products?.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Products