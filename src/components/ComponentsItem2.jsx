import React from 'react'
import WidgetProduct from './WidgetProduct'
import "../styles/components/componentitem2.scss"

const ComponentsItem2 = () => {
    return (
        <div className='product-container'>
            <div className="widget-width">
                <div className="item-content">
                    <div className="product-header">
                        <span className="left">çok satan ürünler</span>
                        <span className="right">
                            <a href="#">tüm ürünler !</a>
                        </span>
                    </div>
                    <div className="product-body">
                        <div className="arrow-btn-left">
                            <button><i className="fa-solid fa-chevron-left"></i></button>
                        </div>
                        <div className="arrow-btn-right">
                            <button><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                        <div className="product-slider">
                            <WidgetProduct/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ComponentsItem2