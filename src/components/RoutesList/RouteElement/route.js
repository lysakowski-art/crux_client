import React,{useContext} from 'react';
import { ListGroup, Card } from "react-bootstrap";
import {useTranslation} from 'react-i18next'
import scales from '../../_common/scales'
import {GlobalContext} from "../../Context/globalProvider"
import {RouteContext} from "./routeContext"
import RouteHeader from "./routeHeader"
import RouteTextOutput from "./routeTextOutput"


const Route = () => {
    const {t} =useTranslation()
    const {userType} =useContext(GlobalContext)
    const {routeAuthor, setRouteAuthor,id,userName,bolts,routeRank,routeType,routeDescription,setRouteDescription} = useContext(RouteContext)
    return ( 
        <ListGroup.Item key={id}>
            <Card className="route-cnt">
              <RouteHeader/>
              <Card.Body>
              <blockquote className="blockquote mb-0">
                <ul>
                 <RouteTextOutput param="route_author" id={id}value={routeAuthor} setValue={setRouteAuthor} name={t("author")}/>  
                 {/* <RouteTextOutput param="route_author" id={id}value={routeAuthor} setValue={setRouteAuthor} name={t("author")}/>  
                 <RouteTextOutput param="route_author" id={id}value={routeAuthor} setValue={setRouteAuthor} name={t("author")}/>   */}

                  <li>{t("scale")}: {scales.calculate("french",routeRank)}</li>
                  <li>{t("type")}: {routeType ? t("sport"): t("self")}</li>
                  <li>{t("expansion_bolts/placemant")}: {bolts}</li>
                  <p>
                 <RouteTextOutput param="route_description" id={id}value={routeDescription} setValue={setRouteDescription} name={t("opis")}/>  
                  </p>
                </ul>
                <footer className="blockquote-footer">
                  {t("added by")} {userName !== undefined ? <cite title={userName}>{userName}</cite> : <cite title="undefined">{t("stranger")}</cite>}
                </footer>
              </blockquote>
              </Card.Body>
            </Card>
          </ListGroup.Item>

     );
}
 
export default Route;