import React, {useState, useEffect, useContext} from 'react';
import {  Form, Col  } from "react-bootstrap"
import UserInput from '../User/userInput';
import UserSubmit from '../User/userSubmit'
import {useTranslation} from "react-i18next";
import RegisterPanel from "../RegisterPanel";
import UserDestroy from "../User/userDestroy"
import "./_loginPanel.scss";


const LoginPanel = () => {
    const [email_adress, setEmail_adress] = useState("")
    const [password, setPassword] = useState("")
    const [loginData, setLoginData] = useState({})

    useEffect(()=>{
      setLoginData({
        "email_adress": email_adress,
        "password": password
      })
    },[email_adress, password])
    const {t} = useTranslation();
    return ( 
      <>
        <Form className="login_panel">
          <Form.Row style={{justifyContent: "center"}}>
            <h3>{t("login")}</h3>
          </Form.Row>
          <Form.Row>
            <UserInput placeholder={t("email")} setValue={setEmail_adress} label={false}/>
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