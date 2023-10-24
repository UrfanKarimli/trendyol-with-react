import React from 'react';
import Button from './Button';
import Form from './Form';
import Icon from './Icon';
import { FaFacebookF, FaGoogle } from 'react-icons/fa'


import "../styles/components/register.scss"


const Register = ({ children }) => {
    return (
        <div id={'login-register'}>
            <div className="lr-title">
                <h2>Merhaba,</h2>
                <h3>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</h3>
            </div>
            <div className="reg-btn-layout">
                <div className="two-buttoms">
                    <Button className={"left reg-btn active"}>giris yap</Button>
                    <Button className={"right reg-btn"}> uye ol</Button>
                </div>
            </div>
            <div className="lr-container">
                <div className="login-form">
                    <Form></Form>
                </div>
                <div className="social-account-btn">
                    <div className="social-log-btn">
                        <div className="fb-log-icon">
                            <Icon>{<FaFacebookF />}</Icon>
                        </div>
                        <div className="d-flex">
                            <div className="network-name">
                                Facebook
                            </div>
                            <small>ile giris yap</small>
                        </div>
                    </div>
                    <div className="social-log-btn">
                        <div className="go-log-icon">
                            <Icon>{<FaGoogle />}</Icon>
                        </div>
                        <div className="d-flex">
                            <div className="network-name">
                                Google
                            </div>
                            <small>ile giris yap</small>
                        </div>
                    </div>
                </div>
                <div className="guest-user">Üye olmadan verilen siparişlerin takibi için
                    <span className="clickable-text">
                        tıklayınız
                        </span>.
                </div>
            </div>

        </div>
    )
}

export default Register