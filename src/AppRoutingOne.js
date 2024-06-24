import * as React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
// import { getUser } from "react-router-dom"; 

import Notfoundpage from "./pages/404/NotFoundPage";
import Homepage from "./pages/home/HomePage";
import Aboutpage from "./pages/about-faqs/AboutPage";
import Profilepage from "./pages/profile/ProfilePage";
import Taskpage from "./pages/tasks/TaskPage";
import TaskdetailPage from "./pages/tasks/TaskDetailPage";
import Loginpage from "./pages/auth/LoginPage";
import { taskList } from "./components/pure/taskData";
import Statepage from "./pages/home/StatePage";


function AppRoutingOne() {

let logged =  false

// let taskList = [
//   {
//     id: 1,
//     name: 'Task 1',
//     description: 'My first task'
//   },
//   {
//     id: 2,
//     name: 'Task 2',
//     description: 'My second task'
//   }
// ]


useEffect(() => {
  logged =  sessionStorage.getItem('credentials');
  console.log('User logged?', logged);
}, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/un404'>| Route Not Found |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/dashboard'>| Dashboard |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>

        <main>
        <Routes> 
        <Route exact path="/" component={ Homepage } element={<Homepage />} />
        <Route  path="/online-state" component={ Statepage } element={<Statepage />} />
        
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/faqs" element={<Aboutpage />} />

        <Route path="/profile" element={<ProfileRoute logged={logged} />} />
        <Route path="/login" element={<CustomLoginPage  />} />
        <Route path="/tasks" element={<Taskpage />} component={ Taskpage } ></Route>
        {/* <Route path="/tasks" element={<Taskpage />} component={ Taskpage } ></Route> */}
        <Route 
  exact
  path='/task/:id'
  element=<TaskdetailPage  />
  render={({ match }) => {
    const taskId = parseInt(match.params.id);
    const task = taskList.find(task => task.id === taskId);
    // return TaskdetailPage -- esta es la solucion si no consigo otra
    return <TaskdetailPage task={task} />
      }}
/>
        <Route path="/login" element={<Loginpage />} component={ Loginpage } ></Route>

        {/* <Route path="/login" element={<Loginpage />} component={ Loginpage } ></Route> */}
        {/* 404 - Page Not Found */}
        <Route path="*" element={ <Notfoundpage /> } component={ Notfoundpage }/> 
      </Routes>
      {/* {logged ? 
        <Profilepage />
      :
       <Navigate to="/" replace={true} />} */}
        </main>
      </div>
    </Router>
  );
  }

  function ProfileRoute({ logged }) {
    let alertShown = false;
    
    React.useEffect(() => {
      if (!logged && !alertShown) {
        alert('You must be logged in. Redirecting to log in...');
        alertShown = true;
        logged = true
      }
    }, [logged, alertShown]);
    if (!logged) {
      return <Navigate to="/login"  />;
    } return <Profilepage />;
  }

  function CustomLoginPage({ logged }) {
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));            
            // Redirigir al usuario a la página del perfil después del inicio de sesión exitoso
            navigate('/profile');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    var alertShown = false;

    React.useEffect(() => {
      if (logged && !alertShown) {
        alert('You are logged in. Redirecting to profile page...');
        alertShown = true;
      }
    }, [logged, alertShown]);
  
    if (logged) {
      return <Navigate to="/profile" />;
    }
    return <Loginpage  />;
  }
  
export default AppRoutingOne;
