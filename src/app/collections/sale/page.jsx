import Banner from '@/app/components/Banner'
import SubscriptionSection from "@/app/components/Subscription";

export default function Sale() {
    const product = {
        image: 'https://cdn.shopify.com/s/files/1/0790/6263/0676/files/2.JBL_Quantum_400_ProductImage_Front_535x535px_900x.png?v=1708498148',
        colors: ['#000000'],
        name: 'JBL QUANTUM 400',
        price: '฿3,990.00'
    };
    return (
        <>
            <Banner/>
            <SubscriptionSection />
        </>
    );
}
