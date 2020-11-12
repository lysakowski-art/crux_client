import React, { useState, useEffect } from 'react'
import {Form,Col,Modal, Button} from 'react-bootstrap'
import UserInput from "../User/userInput"
import UserCreate from "../User/userCreate"
import {useTranslation} from 'react-i18next'
import "./_registerPanel.scss"

const RegisterPanel = ({show, setShow,setResponseMessage,setShowResponse}) => {
    const [userName, setUserName] = useState("")
    const [emailAdress, setEmailAdress] = useState("")
    const [password, setPassword] = useState("")
    const [registerData, setRegisterData] = useState({})

    useEffect(()=>{
      setRegisterData({
        "user_name": userName,
        "email_adress": emailAdress,
        "password": password,
        "user_type": "user"
      })
    },[userName,emailAdress,password])
    const {t} = useTranslation();
    const handleClose = () => setShow(false);

    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{t("register panel")}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    <Form.Row style={{marginTop: "2em"}}>
                        <UserCreate  content={t("register")} endpoint="create_user" registerData={registerData} handleClose={handleClose} setResponseMessage={setResponseMessage} setShowResponse={setShowResponse}/>
                    </Form.Row>
                 </Form>
            </Modal.Body>
            <Modal.Footer style={{justifyContent: "center"}}>
                {t("glad to see you are joining to comunity")}
            </Modal.Footer>
        </Modal>

     );
}
export default RegisterPanel