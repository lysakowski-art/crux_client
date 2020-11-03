import React, {useState, useEffect} from 'react';
import {  Form, Col  } from "react-bootstrap"
import UserInput from '../User/userInput';
import UserSubmit from '../User/userSubmit'
import {useTranslation} from "react-i18next";
import "./_loginPanel.scss";



const LoginPanel = ({setLoggedIn,setUserName}) => {
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
                <Form.Row>
                  <Col>
                    <UserInput placeholder={t("email")} setValue={setEmail_adress} label={false}/>
                  </Col>
                  <Col>
                    <UserInput placeholder={t("password")} type="password"  setValue={setPassword} label={false}/>
                  </Col>
                  <Col>
                    <UserSubmit content={t("login")} setLoggedIn={setLoggedIn} setUserName={setUserName} endpoint="auth" loginData={loginData}/>
                  </Col>
                </Form.Row>
            </Form>
        </>
     );
}
 
export default LoginPanel;