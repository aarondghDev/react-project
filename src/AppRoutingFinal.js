import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Notfoundpage from "./pages/404/NotFoundPage";
import Loginpage from "./pages/auth/LoginPage";
import Profilepage from "./pages/profile/ProfilePage";
import Dashboard from "./pages/dashboard/DashBoard";
import Homepage from "./pages/home/HomePage";
import Taskpage from "./pages/tasks/TaskPage";
import Statepage from "./pages/home/StatePage";

function AppRoutingFinal() {
  let loggedIn = useState(false);

  useEffect(() => {
    const credentials = sessionStorage.getItem('credentials');
    console.log(sessionStorage.getItem('credentials'));
    if (credentials){
      loggedIn = true;
    }
    console.log('User logged?', loggedIn);
  }, []);

  return (
    <Router>
      <Routes>

        {/* <Route path="/login" element={<CustomLoginPage logged={loggedIn} />} /> */}
        <Route path="/profile" element={<Profilepage/>} component={ Profilepage } logged={loggedIn}  />
        <Route path="/login" element={<Loginpage />} />
        {/* <Route path="/dashboard" element={<DashboardRoute component={ Dashboard } logged={loggedIn}/>} /> */}
        <Route exact path="/" element={<Homepage />} />
        <Route path="/tasks" element={<Taskpage />} component={ Taskpage } ></Route>
        <Route path="/online-state" element={<Statepage />} ></Route>
        {/* Login route */}
        {/* <Route exact path="/login" component={ Loginpage } /> */}

        {/* Dashboard Route */}


        <Route path="/rrr" element={<Notfoundpage />} />
      </Routes>
    </Router>
  );

}

function ProfileRoute() {

  let alertShown = false;

  useEffect(() => {
    if (!sessionStorage.getItem('credentials') && !alertShown) {
      alert('You must be logged in. Redirecting to log in...');
      alertShown = true;
    }
  }, [alertShown]);

//   if (!sessionStorage.getItem('credentials')) {
//     return <Navigate to="/login" />;
//   }
//   return <Profilepage />;
// }

function DashboardRoute() {

  let alertShown = false;

  useEffect(() => {
    if (!sessionStorage.getItem('credentials') && !alertShown) {
      alert('You must be logged in. Redirecting to log in...');
      alertShown = true;
    }
  }, [alertShown]);

  if (!sessionStorage.getItem('credentials')) {
    return <Navigate to="/login" />;
  }
  return <Dashboard />;
}

// function CustomLoginPage({ loggedIn, setLoggedIn }) {
//   if (sessionStorage.getItem('credentials')) {
//     return <Navigate to="/profile" />;
//   }
//   return <Loginpage setLoggedIn={setLoggedIn} />;
// }
}

export default AppRoutingFinal;
