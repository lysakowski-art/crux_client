import React from 'react';
import {Button} from "react-bootstrap"
import axios from "axios"

const DeleteRoute = ({_id,setRouteActive}) => {
    const url = `http://127.0.0.1:8000/routes/${_id}`
    const handleClick = (e) => {
        e.preventDefault()
        axios
            .delete(url, { withCredentials: true })
            .then(res=>{
                alert(res.data.message)
            })
            .then(()=>{
                setRouteActive(false)
            })
    }
    return ( 
        <Button variant="danger"onClick={handleClick}>
            X
        </Button>
     );
}
 
export default DeleteRoute;