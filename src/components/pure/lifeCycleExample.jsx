/**
 *  Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react'
import PropTypes from "prop-types"

class LifeCycleExample extends Component {

    constructor(props){
    super(props)
    console.log("CONSTRUCTOR: Cuando se instancia el componente");
}

componentWillMount(){
    console.log("DIDMOUNT: justo al acabar el montaje del componente antes de pintarlo/renderizarlo");
}

componentWillReceiveProps(nextProps){
    console.log("WilReceiveProps: si va a recibir nuevas props");
}

shouldComponentUpdate(nextProps, nextState) {
    /**
     * Controlar si el componente debe o no actualizar
     */
}

componentWillUpdate(nextProps, nextState) {
    console.log("WillUpdate: Justo antes de actualizar");
}

componentDiUpdate(prevProps, prevState) {
    console.log("DiUpdate: Justo despues de actualizar");
}


componentWillUnmount() {
    console.log("WillUnmount: Justo antes de desaparecer");
}

render() {
return (
    <div>

    </div>
)
}
}

LifeCycleExample.propTypes = {

}