import Card from '@/app/components/Card'
import ProductsHeader from '@/app/components/ProductHeader'
import SubscriptionSection from '@/app/components/Subscription'
import Link from 'next/link'
import SliderBarOption from '@/app/components/SliderBarOption';
import React from 'react'
import styles from './Sport.module.css'
export default function Sport() {
    const product = {
        image: 'https://cdn.shopify.com/s/files/1/0790/6263/0676/files/2.JBL_Quantum_400_ProductImage_Front_535x535px_900x.png?v=1708498148',
        colors: ['#000000'],
        name: 'JBL QUANTUM 400',
        price: '฿3,990.00'
      };
  return (
    <>
        <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>SPORT</h1>
        </div>
      </div>
      <div className="route">
        <Link href="/">
          <span className="home">Home / </span>
        </Link>
        <span className="sub-dir">หูฟังแบบ Over-Ear และแบบ On-Ear</span>
      </div>
      <ProductsHeader />
      <div className="flex">
          <div>
            
            <SliderBarOption />
          </div>
          <Card product={product} />
        </div>
        <SubscriptionSection />
    </>
  )
}
