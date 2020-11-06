import React from 'react';
import { useEffect,useState } from 'react';
import {Modal} from "react-bootstrap"

const InfoModal = ({showProp, message}) => {
    const [show, setShow] = useState(false);
    useEffect(()=>{
        setShow(showProp)
        // handleClose =() =>{setTimeout(() => {
        //     setShow(false)
        // }, 4000);}
    },[])

    return ( 
        <Modal show={show} >
            <Modal.Header closeButton>
             <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
     );
}
 
export default InfoModal;