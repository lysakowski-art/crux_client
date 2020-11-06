import React from 'react';
import{Card, Button} from 'react-bootstrap'
import {useTranslation} from 'react-i18next'
import "./_notLoggedIn.scss"

const NotLoggedIn = () => {
    const {t} = useTranslation();
    return ( 
        <div className="not-logged-in">
            <Card className="text-center">
                <Card.Header>{t("attention")}</Card.Header>
                <Card.Body>
                <Card.Title>{t("for the insiders")}</Card.Title>
                  <Card.Text>
                    {t('if you want to join')}
                  </Card.Text>
                  {/* <Button variant="dark">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">{t('have a nice day')}</Card.Footer>
            </Card>
            
        </div>
     );
}
 
export default NotLoggedIn;