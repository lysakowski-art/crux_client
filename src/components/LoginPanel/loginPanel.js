import React, {useState, useEffect} from 'react';
import {  Form  } from "react-bootstrap"
import UserInput from '../User/userInput';
import UserSubmit from '../User/userSubmit'
import {useTranslation} from "react-i18next";
import "./_loginPanel.scss";


const LoginPanel = () => {
    const [emailAdress, setEmailAdress] = useState("")
    const [password, setPassword] = useState("")
    const [loginData, setLoginData] = useState({})

    useEffect(()=>{
      setLoginData({
        emailAdress,
        password
      })
    },[emailAdress, password])
    const {t} = useTranslation();
    return ( 
      <>
        <Form className="login_panel">
          <Form.Row style={{justifyContent: "center"}}>
            <h3>{t("login")}</h3>
          </Form.Row>
          <Form.Row>
            <UserInput placeholder={t("email")} setValue={setEmailAdress} label={false}/>
          </Form.Row>
          <Form.Row>
            <UserInput placeholder={t("password")} type="password"  setValue={setPassword} label={false}/>
          </Form.Row>
          <Form.Row style={{justifyContent: "center"}}>
            <UserSubmit content={t("login")} variant="light" endpoint="auth" loginData={loginData}/>
          </Form.Row>
        </Form>
      </>
     );
}
 
export default LoginPanel;