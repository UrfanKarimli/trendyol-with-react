import React from 'react'
import "../styles/components/coupons.scss"

const Coupons = ({ className, cpnName }) => {
    return (
        <div className={'coupon'}>
            <div className="start">
                <span className="coupon-name">Happy Center 25 TL İndirim Kuponu</span>
            </div>
            <div className="center">
                <div className="left-section">
                    <div className="product-img-wrapper">
                        <div className="prduct-img">
                            <img src="" alt="" />
                        </div>
                        <div className="prduct-img">
                            <img src="" alt="" />
                        </div>
                        <div className="prduct-img">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="product-inf-wrapper">
                        <div className="coupon-dates">
                            <span>Geçerlilik: 07.11.2023 - 30.11.2023</span>
                        </div>
                        <div className="coupon-min-price">
                            <ul>
                                <li>
                                    <span>Min. Alışveriş Tutarı : 250 TL</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="middle-section">

                </div>
                <div className="right-section">
                    <div className="price">
                        <span id="coupon-discount">25 TL</span>
                    </div>
                    <div className="view-products-wrapper">
                        <a href="#" className="view-products">Ürünleri Gör</a>
                    </div>
                </div>
            </div>
            <div className="end">
                <span>Bu kupon Hızlı Market'te Happy Center'dan verilecek siparişlerde geçerlidir. İlk 80.000 kullanımla sınırlıdır.</span>
            </div>
        </div>
    )
}

export default Coupons