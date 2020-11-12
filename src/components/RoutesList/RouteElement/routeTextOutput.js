import React,{useState,useEffect, useContext} from 'react';
import {RouteContext} from "./routeContext"
import { Button } from "react-bootstrap"
import {useTranslation} from "react-i18next"
import axios from 'axios';
// import { useEffect } from 'react';

const RouteTextOutput = ({name, value, setValue, id, param}) => {
    const [prevValue, setPrevValue] = useState(value)
    const [editable, setEditable] = useState(false)
    const [data, setData] = useState({})
    const {t} = useTranslation()
    let url = `http://127.0.0.1:8000/routes/${id}`
    
    const handleDoubleClick = () => {
        setEditable(!editable)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleConfirm = (e) =>{
        e.preventDefault();
        console.log(id)
        axios
        .put(url, data, { withCredentials:true })
        .then((res)=>{
            alert(res.data.message)
            setEditable(!editable)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setValue(prevValue)
    }
    useEffect(()=>{
        if(param==="route_author"){
            setData({
                "route_author": value
            })
        } 
        else if(param==="route_title"){
            setData({
                "route_title": value
            })

        } else if(param==="route_description"){
            setData({
                "route_description": value
            })

        } else if(param === "placemant_and_belay_anchor"){
            setData({
                "placemant_and_belay_anchor": value
            })

        }
        // else if(){

        // } else if(){

        // }
    },[value])
    return ( 
        editable ? (
            <li onDoubleClick={handleDoubleClick}>
                <div>
                {name ? `${name}:`: null}
                <input type="text" value={value} style={{border: "none", borderBottom: "1px solid #000"}} onChange={handleChange}/>
                <Button variant="light" onClick={handleConfirm}>
                    {t('confirm')}
                </Button>
                <Button variant="dark" onClick={handleCancel}>
                    {t('cancel')}
                </Button>
            </div>
            </li>
        ) : (
        <li onDoubleClick={handleDoubleClick}>
            <div>
                {name ? `${name}:`: null} {value}
            </div>
        </li>
        )
     );
}
 
export default RouteTextOutput;