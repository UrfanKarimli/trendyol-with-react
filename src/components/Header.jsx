import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import Icon from './Icon'
import { FaSearch, FaUser } from 'react-icons/fa'
import { BiUser, BiSolidUser } from 'react-icons/bi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { PiShoppingCartFill, PiShoppingCartLight } from 'react-icons/pi'
import "../styles/components/header.scss"
import LogoImg from "../image/ty-cumhuriyet-100-logo.svg"


const Header = () => {
    return (
        <header>
            <div className="main-header ">
                <div className="container">
                    <div className="header-top">
                        <ul>
                            <li>
                                <Link to={"/indirim-kuponlari"}>Indirim kuponlarım</Link>
                            </li>
                            <li>
                                <a href="#">Trendyol`da Satış yap</a>
                            </li>
                            <li>
                                <a href="#">Hakkimizda</a>
                            </li>
                            <li>
                                <a href="#">Yardim & Destek</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-buttom">
                        <div className="logo">
                            <Link to={"/"}>
                            <img src={LogoImg} alt={LogoImg} />
                            </Link>
                        </div>
                        <div className="search-block">
                            <div className="search-input">
                                <Input className="srch-input" type="text" placeholder="Aradiginiz urun, kategory veya markayi yaziniz" />
                                <Icon>
                                    <FaSearch />
                                </Icon>
                            </div>
                            <div className="dropdown-block">
                                <div>
                                    <div className="popular">
                                        <h3>popüler aramalar</h3>
                                        <div className="flex-wrap">
                                            <a href="#" className="bluz">bluz</a>
                                            <a href="#" className="women-shirt">kadın gömlek</a>
                                            <a href="#" className="men-shirt">erkek gömlek</a>
                                            <a href="#" className="pants">pantolon</a>
                                            <a href="#" className="dress">elbise</a>
                                            <a href="#" className="school-bag">okul çantası</a>
                                            <a href="#" className="earring">küpe</a>
                                            <a href="#" className="clasp">toka</a>
                                            <a href="#" className="pencil-case">kalem kutusu</a>
                                            <a href="#" className="straightener">saç düzleştirici</a>

                                        </div>
                                    </div>
                                    <div className="special">
                                        <h3>Sana Özel Katagoriler</h3>
                                        <div className="flex-wrap">
                                            <a href="#" className="clothes">Giyim</a>
                                            <a href="#" className="accessory">Aksesuar</a>
                                            <a href="#" className="dress">Elbise</a>
                                            <a href="#" className="pants">Pantolon</a>
                                            <a href="#" className="cosmetics">Kosmetik</a>
                                            <a href="#" className="electronic">Elektronik</a>
                                            <a href="#" className="t-shirt">T-shirt</a>
                                            <a href="#" className="skin-care">Cilt Bakımı</a>
                                            <a href="#" className="sport-shoe">Sor Ayakkabı</a>
                                            <a href="#" className="shoe">Ayakkabı</a>
                                            <a href="#" className="shirt">Gömlek</a>
                                            <a href="#" className="underwear">İç Giyim</a>
                                            <a href="#" className="store">Süpermarket</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-navigator">
                            <div className="log-reg">
                                <Link to={"/giris"}>
                                    <span className="icon">
                                        <Icon className={"silver"}>
                                            <BiUser size={"18px"} />
                                        </Icon>
                                        <Icon className={"orange"}>
                                            <BiSolidUser size={"18px"} />
                                        </Icon>
                                    </span>
                                    <p className="log-in">Giriş yap</p>
                                </Link>
                                <div className="login-dropdown">
                                    <div className="button-column">
                                        <Link to={"/giris"}>
                                        <span className="login">
                                            Giriş yap
                                        </span>
                                        </Link>
                                        
                                        <span className="register">
                                            Üye Ol
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <a href="#" className="favorite">
                                <div className="link">
                                    <div className="icon">
                                        <Icon className={"orange"}>{<AiFillHeart size={"18px"} />}</Icon>
                                        <Icon className={" silver"}>{<AiOutlineHeart size={"18px"} />}</Icon>

                                    </div>
                                    <p className="link-text">Favorilerim</p>
                                </div>
                            </a>
                            <div className="basket">
                                <Link to={"/sepet"}>
                                <span className="icon">
                                        <Icon className={"silver"}>
                                            <PiShoppingCartLight size={"18px"} />
                                        </Icon>
                                        <Icon className={"orange"}>
                                            <PiShoppingCartFill size={"18px"} />
                                        </Icon>
                                    </span>
                                    <p className="log-in">Sepetim</p>
                                </Link>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-nav">
                    <div className="nav-container">
                        <div className="nav-wrap">
                            <nav>
                                <ul className='main-nav'>
                                    <li className='tab-link'>
                                        <a href="#" className="category-header navbar-first-cap">Kadın</a>
                                        <div className='sub-nav'>
                                            <div className="sub-nav-center">
                                                <div className="sub-nav-outer">

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header