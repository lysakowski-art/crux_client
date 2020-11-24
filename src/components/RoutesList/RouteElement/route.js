import React, { useContext } from "react";
import { ListGroup, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import scales from "../../_common/scales";
import { RouteContext } from "./routeContext";
import RouteHeader from "./routeHeader";
import RouteTextOutput from "./routeTextOutput";

const Route = () => {
  const { t } = useTranslation();
  const {
    rAuthor,
    setRAuthor,
    id,
    uName,
    boltsDigit,
    rRank,
    rType,
    rDescription,
    setRDescription,
  } = useContext(RouteContext);
  return (
    <ListGroup.Item key={id}>
      <Card className="route-cnt">
        <RouteHeader />
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <ul>
              <li>
                <RouteTextOutput
                  param="route_author"
                  id={id}
                  value={rAuthor}
                  setValue={setRAuthor}
                  name={t("author")}
                />
              </li>
              {/* <RouteTextOutput param="route_author" id={id}value={routeAuthor} setValue={setRouteAuthor} name={t("author")}/>  
                 <RouteTextOutput param="route_author" id={id}value={routeAuthor} setValue={setRouteAuthor} name={t("author")}/>   */}

              <li>
                {t("scale")}: {scales.calculate("french", rRank)}
              </li>
              <li>
                {t("type")}: {rType ? t("sport") : t("self")}
              </li>
              <li>
                {t("expansion_bolts/placemant")}: {boltsDigit}
              </li>
              <div>
                <RouteTextOutput
                  param="route_description"
                  id={id}
                  value={rDescription}
                  setValue={setRDescription}
                  textarea={true}
                  name={null}
                />
              </div>
            </ul>
            <footer className="blockquote-footer">
              {t("added by")}{" "}
              {uName !== undefined ? (
                <cite title={uName}>{uName}</cite>
              ) : (
                <cite title="undefined">{t("stranger")}</cite>
              )}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default Route;
