import React from 'react';
import {Row, Button} from "react-bootstrap"
import {useTranslation} from "react-i18next"

const ConfirmPanel = () => {
    const {t} = useTranslation()    
    const url = window.location.href
    // const endpoint = url.slice(26)

    return (
        <div>
            <Row>{t('greeting')}!</Row>
            <Row>{url}</Row>
            <Row>
                <Button>
                    {t("confirm")}
                </Button>
            </Row>
        </div>
    );
}
 
export default ConfirmPanel;