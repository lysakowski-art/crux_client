import React from 'react';
import {Button} from 'react-bootstrap';
import {useTranslation} from 'react-i18next'

const ResetConditions = ({setRegion,setRouteRank, setRoutes, variant, name}) => {
    const {t} =useTranslation()
    const handleClick = (e) => {
        setRouteRank(0)
        setRegion("random")
        // setRoutes([])
    }

    return ( 
        <Button style={{marginLeft: "10px"}}
        variant={variant}
        onClick={handleClick}>
            {t(name)}
        </Button>
     );
}
 
export default ResetConditions;