import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <>
            <div className="auth__section">
                <div className="auth__container">
                    <div className="auth__title"><h2>สร้างบัญชีผู้ใช้</h2></div>
                    <form className="auth__form">
                        <div className="form__field">
                            <label>ชื่อ</label>
                            <input type="text" required/>
                        </div>
                        <div className="form__field">
                            <label>นามสกุล</label>
                            <input type="text" required/>
                        </div>
                        <div className="form__field">
                            <label>เพศ</label>
                            <div className="gender__options">
                                <div className="gender__option">
                                    <input type="radio" name="gender" value="ชาย" required /> ชาย
                                </div>
                                <div className="gender__option">
                                    <input type="radio" name="gender" value="หญิง" required /> หญิง
                                </div>
                                <div className="gender__option">
                                    <input type="radio" name="gender" value="ไม่ต้องการบอก" required /> ไม่ต้องการบอก
                                </div>
                            </div>
                        </div>
                        <div className="form__field">
                            <label>อีเมล</label>
                            <input type="email" required/>
                        </div>
                        <div className="form__field">
                            <label>รหัสผ่าน</label>
                            <input type="password" required/>
                        </div>
                        <button type="submit" className="auth__button">สร้าง</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
