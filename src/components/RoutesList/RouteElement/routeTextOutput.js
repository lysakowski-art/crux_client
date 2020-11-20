import React,{useState,useEffect,useMemo,useContext} from 'react';
import { Button } from "react-bootstrap"
import {useTranslation} from "react-i18next"
import axios from 'axios';
import {GlobalContext} from "../../Context/globalProvider"

const RouteTextOutput = ({name, value, setValue, id, param, textarea}) => {
    const [editable, setEditable] = useState(false)
    const [data, setData] = useState({})
    const {loggedIn} = useContext(GlobalContext)
    const {t} = useTranslation()
    let url = `http://127.0.0.1:8000/routes/${id}`
    const prevValue = useMemo(() => value,[])

    const handleDoubleClick = () => {
        if(loggedIn) return setEditable(!editable)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleConfirm = (e) =>{
        e.preventDefault();
        const updateRoute = async () => {
            await axios
            .put(url, data, { withCredentials:true })
            .then((res)=>{
                alert(res.data.message)
                setEditable(!editable)
            })
            .catch(err=>{
            console.log(err)
            })
        }
        updateRoute();
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setValue(prevValue);
    }
    useEffect(()=>{
        if(param==="route_author"){
            setData({
                "route_author": value,
            })
        } 
        else if(param==="route_title"){
            setData({
                "route_title": value,
            })

        } else if(param==="route_description"){
            setData({
                "route_description": value,
            })

        } else if(param === "placemant_and_belay_anchor"){
            setData({
                "placemant_and_belay_anchor": value,
            })

        }
    },[value,param])

    return ( 
        editable ? (
            <div onDoubleClick={handleDoubleClick}>
                {name ? `${name}:`: null}
                {textarea?<textarea type="text" value={value} style={{width: "100%", height: "200px"}} onChange={handleChange}/>:<input type="text" value={value} style={{border: "none", borderBottom: "1px solid #000"}} onChange={handleChange}/>}
                <Button variant="light" onClick={handleConfirm}>
                    {t('confirm')}
                </Button>   
                <Button variant="dark" onClick={handleCancel}>
                    {t('cancel')}
                </Button>
            </div>

        ) : (

            <div onDoubleClick={handleDoubleClick}>
                {name ? `${name}:`: null} {value}
            </div>

        )
     );
}
 
export default RouteTextOutput;