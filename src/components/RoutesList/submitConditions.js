import React from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';

const SubmitConditions = ({region,routeRank, routes, setRoutes, variant, name}) => {
    const routesUri = 'http://127.0.0.1:8000/routes/'
    const routesRanksUri = routesUri+`${routeRank}/random`
    const routesRegionUri = routesUri+`0/${region}`
    const routesConditionsUri = routesUri+`${routeRank}/${region}`

    const handleClick = (e) => {
        e.preventDefault()
        const getRouteWithConditions = (uri) =>{
            axios
                .get(uri)
                .then(res=>{
                    setRoutes(res.data)
                })
                .catch(err => {
                    console.log(err)
            })
        }

        if(region === "random" && routeRank === 0){
            getRouteWithConditions(routesUri)
        } else if (region !== "random" && routeRank === 0){
            getRouteWithConditions(routesRegionUri)
        } else if (region === "random" && routeRank !== 0){
            getRouteWithConditions(routesRanksUri)
        } else {
            getRouteWithConditions(routesConditionsUri)
        }
    }

    return ( 
        <Button variant={variant} onClick={handleClick}>
            {name}
        </Button>
     );
}
 
export default SubmitConditions;