import ProductSection from "./components/ProductCard";
import SubscriptionSection from "./components/Subscription";
import Carousel from "./components/Carousel";
import Popular from "./components/Popular";
import SwiperCarousel from "./components/SwiperCarousel";

export default function Home() {
  return (
    <>
      <div className="mt-[90px]">
        {/* <Carousel /> */}
        <SwiperCarousel />
        <div className="banner">
          <div className="banner-item">
            <img
              className="img1"
              src="https://ucarecdn.com/b2d903a0-5f06-4839-9652-d09ae7b219fb/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Delivery%20Blk.png"
              alt="Free Shipping Icon"
            />
            <p>ส่งฟรี</p>
          </div>
          <div className="banner-item">
            <img className="img2"
              src="https://ucarecdn.com/b4125b16-bbfc-49ab-814f-36a0d0a2ab7b/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Authentic%20Blk.png"
              alt="Original Products Icon"
            />
            <p>สินค้าของแท้ 100%</p>
          </div>
          <div className="banner-item">
            <img
            className="img3"
              src="https://ucarecdn.com/3e91c659-6b96-45cf-8424-03eafd04f7ab/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Warranty%20Blk.png"
              alt="1 Year Warranty Icon"
            />
            <p>รับประกันสินค้า 1 ปี</p>
          </div>
        </div>
        <Popular />
        <ProductSection />
        <SubscriptionSection />
      </div>
    </>
  );
}
