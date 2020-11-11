import React,{useState, useContext} from 'react';
import {RouteContext} from "./routeContext"
import { Button } from "react-bootstrap"
import {useTranslation} from "react-i18next"
import axios from 'axios';
// import { useEffect } from 'react';

const RouteAuthor = ({name, value, setValue, id, param}) => {
    const [prevValue, setPrevValue] = useState(value)
    const [editable, setEditable] = useState(false)
    const {t} = useTranslation()
    let url = `http://127.0.0.1:8000/${id}/${param}/${value}`
    const handleDoubleClick = () => {
        setEditable(!editable)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleConfirm = (e) =>{
        e.preventDefault();
        axios
        .put(url, { withCredentials:true })
        .then((res)=>{
            alert(res.data.message)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleCancel = () => {
        e.preventDefault();
        setValue(prevValue)
    }
    return ( 
        editable ? (
            <li onDoubleClick={handleDoubleClick}>
                <div>
                {name}:
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
                {name}: {value}
            </div>
        </li>
        )
     );
}
 
export default RouteAuthor;