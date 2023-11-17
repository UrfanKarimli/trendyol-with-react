import React from 'react'
import "../styles/components/slideritems.scss"
import EncokSatan from "../image/En_Cok_Satanlar_202302142041.webp"

const SliderItems = () => {
    return (
        <>
            <section id="slider-items">
                <div className="slider-circule  container">
                    <div className="circule-row">
                        <span className="right-arrow"><i className="fa-solid fa-chevron-right"></i></span>
                        <span className="left-arrow"><i className="fa-solid fa-chevron-left"></i></span>
                        <div className="items-row">
                            <a href="#" className="item">
                                <img src={EncokSatan} alt="" />
                                <span>Sen de al!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SliderItems