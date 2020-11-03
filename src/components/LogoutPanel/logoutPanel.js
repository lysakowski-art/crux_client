import React from 'react';

import {  Row, Col, Button  } from "react-bootstrap"

import {useTranslation} from "react-i18next";
import axios from "axios"


const LogoutPanel = ({userName, endpoint,content, setLoggedIn, loggedIn}) => {
const {t} = useTranslation();
const URI = `http://127.0.0.1:8000/${endpoint}`
const handleSubmit=(e)=>{
    e.preventDefault();
    axios
      .get(URI, { withCredentials: true })
      .then(res=>{
          if(res.status === 200){
              setLoggedIn(!loggedIn)
          }
      })
      .catch(error=>{
        console.log(error)
      })
  }
    return ( 
        <Row className="login_panel" md>
                    <Col className="greetings">{t('greeting')} {userName}!</Col>
                    <Col>
                        <Button variant="dark" onClick={handleSubmit}>
                            {content}
                        </Button>
                    </Col>
        </Row>
     );
}
 
export default LogoutPanel;