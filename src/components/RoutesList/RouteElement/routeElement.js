import React,{useContext} from 'react';
import {RouteProvider} from './routeContext'
import Route from "./route"

const RouteElement = ({el}) => {
  return(
    <RouteProvider el={el}>
      <Route />
    </RouteProvider>
  )
}
 
export default RouteElement;