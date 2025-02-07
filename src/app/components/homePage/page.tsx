import React from 'react'
import Body from '@/app/components/homePage/body'
import Product from '@/app/components/homePage/product' 
import ProductsCard1 from '@/app/components/homePage/productsCard1'
import OurBlog from '@/app/components/homePage/ourBlog'
import Instagram from '@/app/components/homePage/instagram'
import RelatedProducts from '../singleProductPage/relatedProducts'

const HomePage = () => {
  return (
    <div>
      <Body />
      <Product />
      <RelatedProducts />
      <ProductsCard1 />
      <OurBlog />
      <Instagram />
    </div>
  )
}

export default HomePage
