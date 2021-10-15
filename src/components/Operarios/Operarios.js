import React from 'react'
import { useSelector } from 'react-redux';
import Menus from "../../components/Menus/Menus"
import { Logout } from '../logout/Logout';
import { Container } from './styleOperarios.js';





 const Operarios = () => {
    const { name, operador } = useSelector(state => state.login);
    return (<div>
        
        <div>
        <Container>
        <h3>{`Bienvenido ${name} -Operario`}</h3><Logout />
        </Container>
        </div>
        <Menus isOper={operador} />
    
    </div>
    )
}
export default Operarios