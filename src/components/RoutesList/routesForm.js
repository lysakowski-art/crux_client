import React from 'react';

const RoutesForm = ({handleRouteRank,handleRegion, region, routeRank}) => {
    return ( 
        <form>
            <label>
                Choose your level:
                <select>
                    <option value="1"></option>
                </select>
            </label>
            <label>
                Choose region:
                <select>

                </select>
            </label>
        </form>
     );
}
 
export default RoutesForm;