import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/login'
import {Boton} from "./styleLogout"
import history from "../../history";


export const Logout = () => {
    const dispatch = useDispatch();

    const handleClick=(e)=>{
    e.preventDefault()

    dispatch(startLogout());
    history.push("/")
    }
    return (
    <div>
       
            <Boton onClick={handleClick}>Logout</Boton>
       
        </div>
    )
}
