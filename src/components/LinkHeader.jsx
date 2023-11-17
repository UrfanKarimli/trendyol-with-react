import React from 'react'
import "../styles/components/linkheader.scss"
import Eklenen from "../image/eklenen.webp"
import OneCikan from "../image/Onecikan_202304181225.webp"
import Flash from "../image/Flash_202304181225.webp"

const LinkHeader = () => {
    return (
        <>
            <section id="link-header">
                <div className="products-row container">
                    <a href="#">
                        <img src={Eklenen} alt="" />
                    </a>
                    <a href="#">
                        <img src={OneCikan} alt="" />
                    </a>
                    <a href="#">
                        <img src={Flash} alt="" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default LinkHeader