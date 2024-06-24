import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingFunct from './components/pure/gretingFunct';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MicomponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import Optionalrender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import Observableexample from './components/pure/ObservableExample';
import Fetchexample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import AxiosCRUDExample from './components/pure/axiosCRUDExample';
import LoginForm from './components/pure/forms/loginForm';
import Registerpage from './pages/auth/RegisterPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
  {/* Componente propio Greeting.jsx*/}

  {/*  <Greeting name= {25}></Greeting>  {/*aqui vemos como le podemos pasar un atributo a Greetin que ejecutara su codigo segun convenga(ver codigo y el atirbuto name)*/}

  {/*} <GreetingFunct name= "Martin"></GreetingFunct> */}

  {/*Componente ejemplo funcional*/}
  {/*componente de listado de tareas*/}
  {/* Ejemplos de uso de HOOKS */}

  {/* <Ejemplo1></Ejemplo1>*/}
  {/* <Ejemplo2></Ejemplo2>*/}

  {/*<MicomponenteConContexto></MicomponenteConContexto>*/}
  {/* Todo lo que hay aqui, es tratado como props.children */}
  {/* <Ejemplo4 nombre="gay">

    <h3>
      Contenido del props.children
    </h3>
  </Ejemplo4> */}
 
  {/* <GreetingStyled name="Martin"></GreetingStyled> */}
    {/* </header>  */}
      {/* Gestion de eventos */}
  {/* <Father></Father> */}

  {/* Ejemplos para renderizado condicional */}
  {/* <Optionalrender></Optionalrender> */}

  {/* Ejemplo de uso de Formik y de Yup */}
  {/* <LoginFormik></LoginFormik> este es el que estaba */}
  {/* <LoginForm></LoginForm> */}
  {/* <Registerformik></Registerformik> */}
  {/* <Registerpage></Registerpage> */}

  {/* Ejemplos de procesos asyncronos*/}
  {/* <AsyncExample></AsyncExample> */}
  {/* Procesos asyncronos^^ */}
  {/* <Observableexample></Observableexample> */}
  {/* <Fetchexample></Fetchexample> */}
  {/* <AxiosExample></AxiosExample> */}
  {/* <AxiosCRUDExample></AxiosCRUDExample> */}

    {/* Proyecto final ( <TaskListComponent></TaskListComponent> de abajo) */}
    <TaskListComponent></TaskListComponent>
    </div>
    
  );
  }



export default App;
