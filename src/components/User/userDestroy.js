import React from 'react';
import {Button} from 'react-bootstrap'
const UserDestroy = ({variant,content, handleShow}) => {
    return ( 
        <Button variant={variant} onClick={handleShow}>
        {content}
        </Button>
     );
}
 
export default UserDestroy;