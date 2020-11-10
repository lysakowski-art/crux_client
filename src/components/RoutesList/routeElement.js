import React,{useContext, useState} from 'react';
import { ListGroup, Card } from "react-bootstrap";
import {useTranslation} from 'react-i18next'
import scales from '../_common/scales'
import {GlobalContext} from "../Context/globalProvider"
import DeleteRoute from "./deleteRoute"


const RouteElement = (props) => {
    const{_id, route_title, user_name,route_author,route_rank,route_type,region,placemant_and_belay_anchor,route_description, active} = props.el
    const {t} =useTranslation()
    const {userType} =useContext(GlobalContext)
    const [routeActive, setRouteActive] = useState(active)
      return(
        routeActive ? <ListGroup.Item key={_id}>
          <Card className="route-cnt">
            <Card.Header>
              <strong>{route_title}</strong>
              {userType === "admin" || userType === "moderator" ? <DeleteRoute _id={_id} setRouteActive={setRouteActive}/> : null}  
            </Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
              <ul>
                <li>{t("author")}: {route_author}</li>
                <li>{t("scale")}: {scales.calculate("french",route_rank)}</li>
                <li>{t("type")}: {route_type ? t("sport"): t("self")}</li>
                <li>{t("expansion_bolts/placemant")}: {placemant_and_belay_anchor}</li>
                {/* <li>{t("region")}: {}</li> */}
                <p>
                    {route_description}
                </p>
              </ul>
              <footer className="blockquote-footer">
                {t("added by")} {user_name !== undefined ? <cite title={user_name}>{user_name}</cite> : <cite title="undefined">{t("stranger")}</cite>}
              </footer>
            </blockquote>
            </Card.Body>
          </Card>
        </ListGroup.Item> : null
      )
}
 
export default RouteElement;