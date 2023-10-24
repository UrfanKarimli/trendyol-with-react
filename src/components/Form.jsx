import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Input from './Input'
import Label from './Label'
import Icon from './Icon'
import Button from './Button'


const Form = () => {
    const [text, setText] = useState("")
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(FaEye);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(FaEyeSlash);
            setType('text')
        } else {
            setIcon(FaEye)
            setType('password')
        }
    }
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleChangeText = (e) => setText(e.target.value)
    const getData = () => {
        console.log(text, password)
    }
    return (
        <div className='form'>
            <div className="log-mail-wrap">
                <Label className="log-text-label" htmlFor="login-email" text="E-posta" />
                <Input className="log-text-input" type="text" id="login-email" onChange={handleChangeText} />
            </div>
            <div className="password-wrapper">
                <div className="password">
                    <div className="log-pass-wrap">
                        <Label className="log-pas-label" htmlFor="login-password" text="şifre" />
                        <Input className="log-pas-input" type={type} id="login-password" onChange={handleChangePassword} />
                    </div>
                    <div className="eye-icons" onClick={handleToggle}>
                        <Icon >
                            {icon}
                        </Icon>
                    </div>
                </div>
            </div>
            <div className="forgot-password">
                <a>
                    <span>Şifremi Unuttum</span>
                </a>
            </div>
            <Button className={"btn-primary submit-login"} type={"submit"} onClick={getData}>
                <span>Giriş Yap</span>
            </Button>
        </div>
    )
}

export default Form