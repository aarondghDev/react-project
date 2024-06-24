import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes de clases - (rcc - poniendo esto nos auto salen opciones que autocompletan un componente de clase)

class Greeting extends Component { // Esta seria la composicion de una archivo .jsx y de un componente de tipo clase
// las props son esas propiedades o atributos propios que tendria cualquier html - le podemos decir que datos le puedo pasar a este componente para que pinte algo
constructor(props){
    super(props) // Esto de "super" es porque queremos trabajar con las props de nuestro propio componente
    this.state = { // El state es privado e inmutable
        age : 29
    } // Es un dato o un valor totalmente privado, es info que tiene el componente que puede modificarse y cuando se haga cambie la vista
}

    render() {
        return (
            <div>
                <h1>
                    segunda sesion
                </h1>
                <h3> Hola, tu nombre es { this.props.name }</h3>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                <button onClick={this.birthday}> {/*Las llaves se pueden usar en los archivos .jsx para esto, estamos llamando a que imcremente la edad, fijarse que esta sin parentesis, esto porque no queremos que se ejecute*/}
                    Incrementar edad
                </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
         // prevState = valor anterior de state
        ))
    }
}



Greeting.propTypes = {
    name: PropTypes.string, // Aqui le estariamos diciendo que solo le podemos pasas tipo de datos string para el atributo name
};


export default Greeting;

