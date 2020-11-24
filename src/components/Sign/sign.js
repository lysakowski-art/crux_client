import React from 'react';
import LoginPanel from "../LoginPanel"
import RegisterPanel from "../RegisterPanel"
import {useTranslation} from "react-i18next"
import "./_sign.scss"
const Sign = () => {
    const {t, i18n} =useTranslation();
    
    return ( 
        <div className="sign">
            <LoginPanel />
            <br/>
            <div style={{
                fontWeight: "400",
                fontSize: "20px",
                textAlign: "center"
            }}>
                {t("or")}
            </div>
            <br/>
            <RegisterPanel/>
        </div>
     );
}
 
export default Sign;