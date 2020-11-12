import React,{useContext} from 'react';
import { ListGroup, Card } from "react-bootstrap";
import {useTranslation} from 'react-i18next'
import scales from '../../_common/scales'
import {GlobalContext} from "../../Context/globalProvider"
import {RouteContext} from "./routeContext"
import RouteHeader from "./routeHeader"
import RouteAuthor from "./routeAuthor"


const Route = () => {
    const {t} =useTranslation()
    const {userType} =useContext(GlobalContext)
    const {routeAuthor, setRouteAuthor,id} = useContext(RouteContext)
    return ( 
        <ListGroup.Item key={id}>
            <Card className="route-cnt">
              <RouteHeader/>
              <Card.Body>
              <blockquote className="blockquote mb-0">
                <ul>
                 <RouteAuthor param="route_author" id={id}value={routeAuthor} setValue={setRouteAuthor} name={t("author")}/>  
                  {/* <li>{t("scale")}: {scales.calculate("french",route_rank)}</li> */}
                  {/* <li>{t("type")}: {route_type ? t("sport"): t("self")}</li> */}
                  {/* <li>{t("expansion_bolts/placemant")}: {placemant_and_belay_anchor}</li> */}
                  {/* <p>
                      {route_description}
                  </p> */}
                </ul>
                {/* <footer className="blockquote-footer">
                  {t("added by")} {user_name !== undefined ? <cite title={user_name}>{user_name}</cite> : <cite title="undefined">{t("stranger")}</cite>}
                </footer> */}
              </blockquote>
              </Card.Body>
            </Card>
          </ListGroup.Item>

     );
}
 
export default Route;