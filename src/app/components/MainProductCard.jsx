import React from 'react'

export default function MainProductCard() {
  return (
    <>
        <div className="new-section">
      <div className="new-container">
        <img
          className="new-image"
          src="https://ucarecdn.com/5348eecb-c213-4927-b783-2b8533e2d6c4/-/format/auto/-/preview/1500x1500/-/quality/lighter/JBL_Charge_5_Sub_Category_Banner_800x400px-2.jpg" // Replace with your actual image URL
          alt="ลำโพงบลูทูธพกพา"
        />
        <div className="new-title">ลำโพงบลูทูธพกพา</div>
        <div className="new-description">
          ด้วยอายุแบตเตอรี่ยาวนานและเทคโนโลยีบลูทูธลำโพงไร้สายพกพาจาก JBL
          จึงให้คุณเพลิดเพลินไปกับเพลง ได้แม้อยู่ไกลบ้าน
        </div>
        <a href="#" className="new-button">
          ดูสินค้าทั้งหมด
        </a>
      </div>
    </div>
    </>
  )
}
