import React from 'react'

import "../styles/components/footer.scss"
import Icon from './Icon'
import PopularShopAndMark from './PopularShopAndMark'
import PopularPages from './PopularPages'
import VisaImg from "../image/footer-images/footer-visa-black.webp"
import Masterimg from "../image/footer-images/footer-master-card.webp"
import TroyImg from "../image/footer-images/troy-logo-transparent.webp"
import AmexImg from "../image/footer-images/footer-amex.webp"
import AppStoreimg from "../image/footer-images/iosV2.svg"
import GoogleStoreImg from "../image/footer-images/googleV2.svg"
import HuaweyImg from "../image/footer-images/huaweiV2.svg"
import QrImg from "../image/footer-images/etbis-qr.webp";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="bg-white">
                    <div className="flex-between">
                        <div className="popular-brands popular-brands-left">
                            <PopularShopAndMark />
                        </div>
                        <div className="popular-brands popular-brands-right">
                            <PopularPages />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-main">
                <div className="list-foot">
                    <div className="list-footer">
                        <h4><a href="">Trendyol</a></h4>
                        <div className="footer-links">
                            <ul>
                                <li><a href="">Biz Kimiz</a></li>
                                <li><a href="">Kariyer</a></li>
                                <li><a href="">İletişim</a></li>
                                <li><a href="">Trendyol'da Satış Yap</a></li>
                            </ul>
                        </div>
                        <span>Güvenli Alışveriş</span>
                        <div className="footer1-app">
                            <div className="troy" style={{ backgroundImage: `url(${TroyImg})` }}></div>
                            <div className="master" style={{ backgroundImage: `url(${Masterimg})` }}></div>
                            <div className="visa" style={{ backgroundImage: `url(${VisaImg})` }}></div>
                            <div className="american" style={{ backgroundImage: `url(${AmexImg})` }}></div>
                        </div>
                    </div>
                    <div className="list-footer">
                        <h4><a href="">About us</a></h4>
                        <div className="footer-links">
                            <ul>
                                <li><a href="">Who we are</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Contact us</a></li>
                                <li><a href="">Sustainability</a></li>
                            </ul>
                        </div>
                        <span>Mobil Uygulamalar</span>
                        <div className="footer2-app">
                            <a href="">
                                <div className="app-store" style={{ backgroundImage: `url(${AppStoreimg})` }}></div>
                            </a>
                            <a href="">
                                <div className="google-play" style={{ backgroundImage: `url(${GoogleStoreImg})` }}></div>
                            </a>
                            <a href="">
                                <div className="huawei" style={{ backgroundImage: `url(${HuaweyImg})` }}></div>
                            </a>
                        </div>
                    </div>
                    <div className="list-footer">
                        <h4><a href="">Kampanyalar</a></h4>
                        <div className="footer-links">
                            <ul>
                                <li><a href="">Aktif Kampanyalar</a></li>
                                <li><a href="">Elite Üyelik</a></li>
                                <li><a href="">Hediye Fikirleri</a></li>
                                <li><a href="">Trendyol Fırsatları</a></li>
                            </ul>
                        </div>
                        <span>Sosyal Medya</span>
                        <div className="footer3-app">
                            <a href="">
                                <Icon className={"fa-facebook-f"}>
                                    <FaFacebookF size={"15px"} />
                                </Icon>
                            </a>
                            <a href="">
                                <Icon className="fa-instagram">
                                    <FaInstagram size={"15px"} />
                                </Icon>
                                </a>
                            <a href="">
                                <Icon className="fa-twitter">
                                    <FaTwitter size={"15px"} />
                                </Icon></a>
                            <a href="">
                                <Icon className="fa-youtube">
                                    <FaYoutube size={"15px"} />
                                </Icon></a>
                        </div>
                    </div>
                    <div className="list-footer">
                        <h4><a href="">Yardım</a></h4>
                        <div className="footer-links">
                            <ul>
                                <li><a href="">Sıkça Sorulan Sorular</a></li>
                                <li><a href="">Canlı Yardım</a></li>
                                <li><a href="">Nasıl İade Edebilirim</a></li>
                                <li><a href="">İşlem Rehberi</a></li>
                            </ul>
                        </div>
                        <button>Ülke Değiştir</button>
                        <div className="footer4-app">
                            <a href="">
                                <div className="qr-code">
                                    <img src={QrImg} alt="" />
                                </div>
                            </a>
                            <a href="">
                                <div className="tr-go"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-foot ">
                <div className="container-main2 container ">
                    <div className="foot-flex">
                        <span>©2023 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.</span>
                        <div className="footer-link">
                            <ul>
                                <li><a href="">Çerez Tercihleri</a></li>
                                <li><a href="">KVK ve Gizlilik Politikası</a></li>
                                <li><a href="">DSM Grup</a></li>
                                <li><a href="">Kullanım Koşulları</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer