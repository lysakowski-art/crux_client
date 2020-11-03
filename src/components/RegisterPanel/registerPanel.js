import React, { useState, useEffect } from 'react'
import {Form,Col} from 'react-bootstrap'
import UserInput from "../User/userInput"
import UserCreate from "../User/userCreate"
import {useTranslation} from 'react-i18next'

const RegisterPanel = ({setLoggedIn}) => {
    const [userName, setUserName] = useState("")
    const [emailAdress, setEmailAdress] = useState("")
    const [password, setPassword] = useState("")
    const [userType, setUserType] = useState("user")
    const [registerData, setRegisterData] = useState({})
    
    useEffect(()=>{
      setRegisterData({
        "user_name": userName,
        "email_adress": emailAdress,
        "password": password,
        "user_type": userType
      })
    },[userName,emailAdress,password])
    const {t} = useTranslation();
    return ( 
        <>
            <Form className="register_panel">
                <Form.Row>
                    <UserInput placeholder={t("nickname")} setValue={setUserName} label={t("nickname")}/>
                </Form.Row>
                <Form.Row>
                    <UserInput placeholder={t("email")} setValue={setEmailAdress} label={t('email')}/>
                </Form.Row>
                <Form.Row>
                    <UserInput placeholder={t("password")} type="password"  setValue={setPassword} label={t("password")}/>
                </Form.Row>
                <Form.Row>
                    <UserCreate content={t("register")} endpoint="create_user" registerData={registerData}/>
                </Form.Row>
            </Form>
        </>
     );
}
export default RegisterPanel