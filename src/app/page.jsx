import React from "react";
import PopularProductSection from './components/PopularProduct'
import SubscriptionSection from "./components/Subscription";

export default function Home() {
    return (
        <>
            <div>
                <PopularProductSection/>
                <SubscriptionSection />
            </div>
        </>
    );
}
