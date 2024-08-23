import Carousel from "@/app/components/Carousel";
import ProductsHeader from "@/app/components/ProductHeader";
import SubscriptionSection from "@/app/components/Subscription";
import SliderBarOption from '@/app/components/SliderBarOption';
import Link from "next/link";
import Card from "@/app/components/Card";
import style from './sale.module.css'

export default function Sale() {
    const product = {
        image: 'https://cdn.shopify.com/s/files/1/0790/6263/0676/files/2.JBL_Quantum_400_ProductImage_Front_535x535px_900x.png?v=1708498148',
        colors: ['#000000'],
        name: 'JBL QUANTUM 400',
        price: '฿3,990.00'
      };
  return (
    <>
      <div className="mt-[72px]">
        <div className={style.saleBanner}>

        </div>
        <div className="route">
          <Link href="/">
            <span className="home">Home / </span>
          </Link>
          <span className="sub-dir">Sale</span>
        </div>
        <ProductsHeader />
        <div className="flex">
          <div>
            
            <SliderBarOption />
          </div>
          <Card product={product} />
        </div>
        <SubscriptionSection />
      </div>
    </>
  );
}
