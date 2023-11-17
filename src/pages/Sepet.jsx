import React from 'react'
import Counter from '../components/Counter'
import "../styles/pages/sepet.scss"
import Button from '../components/Button'
import CounterImg from '../image/component-item/1_org_zoom.webp'

const Sepet = () => {
  return (
    <div id='basket-container'>
      <div className="flex-between">
        <div className="left-wrapper">
          <div className="header-wrapper">
            <div className="header-pb">Sepetim (1 Urun) </div>
            <div className="country-shipment-wrapper">
              <div className="header-contry">
                <p className="shipment-country">Çatdırılma Ölkəsi:</p>
                <img src="" alt="" className="country-flag" />
                <p className="selected-country">Azərbaycan</p>
              </div>
              <Button className={"change-country"}>Dəyişdir</Button>
            </div>
          </div>
          <div className="sales-info-message is-eligable">
            <div className="info-title">
              <i className='check-i'>
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
              <h2>Səbətindəki məhsullar Azərbaycana çatdırılmağa uyğundur.</h2>
            </div>
            <p className="info-content">
              Çatdırılma şərtləri üçün
              <strong> klickle !</strong>
            </p>
            <div className="info-subtext">
              <i class="i-info1"></i>
              <p>Türkiyə ünvanlı sifarişlərdə karqo qiyməti fərqli ola bilər.</p>
            </div>
          </div>
          <div className="merchant-group">
            <div className="merchant-top">
              <div className="merchant-header">
                <div className="merchant-info">
                  <div className="flex-column">
                    <div className="checkbox-wrapper">
                      <div className="checkbox-container">
                        <div className="checkbox"></div>
                      </div>
                      <span className="checkbox-text"></span>
                    </div>
                  </div>
                  <div className="merchant-label">
                    Satici :
                  </div>
                  <div className="merchant-details">
                    <a href="#" className="merchant-name">
                      <span>Hangast</span>
                      <div className="merchant-point">8.9</div>
                      <i className="arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="promotion-info"></div>
              </div>
            </div>
            <div className="backet-items-wrapper">
              <div className="basket-item">
                <div className="flex-column">
                  <div className="checkbox-wrapper">
                    <div className="checkbox-container">
                      <div className="checkbox"></div>
                    </div>
                    <span className="checkbox-text"></span>
                  </div>
                </div>
                <div className="img-container">
                  <div className="img-wrapper">
                    <img src={CounterImg} alt="" />
                  </div>
                </div>
                <div className="basket-item-details">
                  <a href="#" className="basket-item-details-info">
                    <p className="item">
                      <span>HANGAST</span>
                      Hl-004rgb Kristal 5v Şarjlı Masa Lambası Led Dokunmatik 16 Renkli Akrilik
                    </p>
                    <p>
                      <span className="rush-delivery">Hızlı Teslimat:</span>
                      <span>1 gün içinde kargoda</span>
                    </p>
                  </a>
                  <div className="basket-item-label-wrapper">
                    <div className="information-label">
                      <img src="" alt="" />
                      <p>Azərbaycana çatdırılma üçün uyğundur.</p>
                    </div>
                  </div>
                </div>
                <div className="basket-item-actions">
                  <div className="actions-info">
                    <div className="counter-wrapper">
                      <div className="counter-container">
                        <Counter className={"numeric-counter"} />
                      </div>
                    </div>
                    <div className="price-and-badge">
                      <div className="item-price-wrapper">
                        <div className="item-price">799 TL</div>
                      </div>
                    </div>
                  </div>
                  <Button className={"crash"}>i</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="suggest-tabs-wrapper">

          </div>
        </div>
        <div className="right-sticky">

        </div>
      </div>
    </div>
  )
}

export default Sepet