import React from 'react'
import Button from '../components/Button'
import "../styles/pages/discountcoupons.scss"
import Coupons from '../components/Coupons'

const DiscountCoupons = () => {
    return (
        <div className="discount-coupons">
            <div className='account-layout-container'>
                <div className="left">
                    <div>
                        <div className="layout-wrapper">
                            <section className='section-user-info'>
                                <p>Urfan Kerimli</p>
                                <div className="country-container">
                                    <div className="country-dropdown">
                                        <span>Çatdırılma Ölkəsi</span>
                                        <div className="options-wrapper">
                                            <div className="contry-flag">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="country-code">
                                                AZ
                                            </div>
                                            <i className="dropdown-arrow"></i>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='section-my-orders'>
                                <h4>Siparislerim</h4>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Tüm Siparişlerim</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Degerlendirmelerim</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Satıcı Mesajlarım</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Tekrak satin al</span>
                                </a>
                            </section>
                            <section className='section-special-to-you'>
                                <h4>Sana Özel</h4>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Indirim Kuponlari</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Önceden Gezdiklerim</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Takip Etdiğim Mağazalar</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Trendyol Elite</span>
                                </a>
                            </section>
                            <section className='section-my-services'>
                                <h4>Hizmetlerim</h4>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Krediler</span>
                                    <p>YENİ</p>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Şanslı Çekiliş</span>
                                    <p>YENİ</p>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>CardFinans Trendyol</span>
                                    <p>YENİ</p>
                                </a>
                            </section>
                            <section className='section-my-account'>
                                <h4>Hesabım & Yardım</h4>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Kullanıcı Bilgilerim</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Adres Bilgilerim</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Kayıtlı Kartlarım</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Duyuru Tercihlerim</span>
                                </a>
                                <a className="layout-item-container" href="#">
                                    <span className="layout-item-icons">
                                        <i className="i-cargo-flat"></i>
                                    </span>
                                    <span>Yardım</span>
                                </a>
                            </section>
                            <a className="assistant-wrapper" href="#">
                                <i className="i-assistant-flat"></i>
                                <h3>Trendyol Asistan'a Sor</h3>
                                <p>7/24 Sorularınızı Cevaplar</p>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="coupon-header">
                        <span>İndirim Kuponlarım</span>
                        <p>Kullanmak istediğiniz indirim kuponunu sepet sayfasında seçebilirsiniz.</p>
                    </div>
                    <div className="coupon-list-wrapper">
                        <div className="coupon-sub-header">
                            <div>
                                <div className="sticky">
                                    <div className="popup-section">
                                        <div className="filers-content">
                                            <Button className={"filter-button selected"}>Tümü</Button>
                                            <Button className={"filter-button "}>Hızlı Market</Button>
                                            <Button className={"filter-button "}>Moda </Button>
                                            <Button className={"filter-button "}>Size Özel</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="coupon-list">
                            <Coupons/>
                            <Coupons/>
                            <Coupons/>
                            <Coupons/>
                            <Coupons/>
                            <Coupons/>
                            <Coupons/>
                            <Coupons/>
                            <Coupons/>
                            <Coupons/>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DiscountCoupons