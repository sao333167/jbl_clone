import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
    return (
        <>
            <div className="auth__section">
                <div className="auth__container">
                    <div className="auth__title"><h2>เข้าสู่ระบบ</h2></div>
                    <form className="auth__form">
                        <div className="form__field">
                            <label>อีเมล</label>
                            <input type="email" required/>
                        </div>
                        <div className="form__field">
                            <label>รหัสผ่าน</label>
                            <div className="auth__password">
                                <input type="password" required/>
                                <Link href="/account/login/recover" className="auth__recover">ลืมรหัสผ่านของคุณใช่ไหม</Link>
                            </div>
                        </div>
                        <button type="submit" className="auth__button">ลงชื่อเข้าใช้</button>
                    </form>
                    <div className="qa__link">ลูกค้าใหม่? <Link href="/account/register">สร้างบัญชี</Link></div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
