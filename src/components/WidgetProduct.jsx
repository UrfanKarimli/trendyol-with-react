import React from 'react'

const WidgetProduct = () => {
    return (
        <section className='widget-product'>
            <a href="#">
                <div className="img-container">
                    <img src="" alt="" />
                    <div className="token-box">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="description">
                    <div className="brand-header">
                        <span className="brand">trendyolmilla</span>
                        <span className="name">Lacivert Fermuarlı Degaje Yaka Triko Hırka
                            TWOAW24HI00072</span>
                    </div>
                    <div className="price-down">
                        <span className="lowest-price"></span>
                    </div>
                    <div className="price-container">
                        <div className="prices">
                            <div className="real-price">
                                450 TL
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <div className="heart-btn">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-heart" ></i>
            </div>
        </section>
    )
}

export default WidgetProduct