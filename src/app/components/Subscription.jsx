import React from 'react';
import Link from 'next/link'

const SubscriptionSection = () => {
    return (
        <div className="subscription-section">
            <div className="subscription-content">
                <div className="subscription-title">
                    <h4>
                        ลงทะเบียนเพื่อรับข่าวสาร<br />
                        และข้อเสนอล่าสุดจาก JBL!
                    </h4>
                </div>
                <form className="subscription-form">
                    <input
                        type="email"
                        className="subscription-input"
                        placeholder="อีเมล์"
                        required
                    />
                    <button type="submit" className="subscription-button">สมัครรับข่าวสาร</button>
                </form>
                <div className="subscription-privacy"><h5>View our <Link href="/pages/privacy-policy-statement">Privacy Policy</Link></h5></div>
            </div>
        </div>
    );
};

export default SubscriptionSection;
