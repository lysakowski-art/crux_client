import React, {useState, useEffect, useContext} from 'react';
import {  Form, Col  } from "react-bootstrap"
import UserInput from '../User/userInput';
import UserSubmit from '../User/userSubmit'
import {useTranslation} from "react-i18next";
import RegisterPanel from "../RegisterPanel";
import UserDestroy from "../User/userDestroy"
import "./_loginPanel.scss";


const LoginPanel = ({show,setShow}) => {
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
    const handleShow = () => setShow(true);
    return ( 
        <>
            <Form className="login_panel">
                <Form.Row>
                  <Col xs={3}>
                    <UserInput placeholder={t("email")} setValue={setEmail_adress} label={false}/>
                  </Col>
                  <Col xs={3}>
                    <UserInput placeholder={t("password")} type="password"  setValue={setPassword} label={false}/>
                  </Col >
                  <Col xs={1.5}>
                    <UserSubmit content={t("login")} variant="light" endpoint="auth" loginData={loginData}/>
                  </Col> 
                  <Col xs={4}>
                    <UserDestroy content={t("register")} variant="light" handleShow={handleShow}/>
                  </Col>
                </Form.Row>
            </Form>
            <RegisterPanel show={show} setShow={setShow}/>
        </>
     );
}
 
export default LoginPanel;