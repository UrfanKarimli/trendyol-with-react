import React from 'react'
import "../styles/components/componentitem.scss"
import ConponentImg from "../image/component-item/mobile_20231108080554_AyakkabiCantadaAvantajliUrunler2353800mobile.webp"

const ComponentsItem = () => {
    return (
        <>
            <section id="component-item" className="component">
                <div className="component-card">
                    <a href="#" className="item-link">
                        <span className="top-img">
                            <img src={ConponentImg}alt="" />
                        </span>
                        <summary>
                            <span className="text">Akilli cep telefonlari-mega eylul</span>
                            <span className="hover-text">
                                Alisverise basla
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                        </summary>
                    </a>
                </div>
            </section>
        </>
    )
}

export default ComponentsItem