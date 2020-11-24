import React, { useState, useEffect } from 'react'
import {Form} from 'react-bootstrap'
import UserInput from "../User/userInput"
import UserCreate from "../User/userCreate"
import {useTranslation} from 'react-i18next'
import "./_registerPanel.scss"

const RegisterPanel = ({setResponseMessage,setShowResponse}) => {
    const [userName, setUserName] = useState("")
    const [emailAdress, setEmailAdress] = useState("")
    const [password, setPassword] = useState("")
    const [registerData, setRegisterData] = useState({})

    useEffect(()=>{
      setRegisterData({
        userName,
        emailAdress,
        password,
        "userType": "user"
      })
    },[userName,emailAdress,password])
    const {t, i18n} = useTranslation();

    return ( 
        <div>
            <Form className="register_panel">
                <Form.Row style={{justifyContent: "center"}}>
                    <h3>{t("register")}</h3>
                </Form.Row>
                <Form.Row>
                    <UserInput placeholder={t("nickname")} setValue={setUserName}/>
                </Form.Row>
                <Form.Row>
                    <UserInput placeholder={t("email")} setValue={setEmailAdress}/>
                </Form.Row>
                <Form.Row>
                    <UserInput placeholder={t("password")} type="password"  setValue={setPassword} />
                </Form.Row>
                <Form.Row style={{marginTop: "2em"}}>
                    <UserCreate  content={t("register")} endpoint="create_user" registerData={registerData} setResponseMessage={setResponseMessage} setShowResponse={setShowResponse}/>
                </Form.Row>
             </Form>
        </div>
     );
}
export default RegisterPanel