// import React from 'react';
// import { useLocation } from "react-router-dom";


// const Statepage = () => {

//     const location = sessionStorage.getItem('credentials');
//     const onlineState = false

//     if (location){
//         onlineState = true;
//         return "The user is online"
//       } return "The user is offline"

//     // const onlineState = location.state ? location.state.online :'offline';// quitar
//     // const onlineState = location.state.online

//     console.log(onlineState); // Estado enviado
    



//     // console.log(location.state.online); State sent
//     // console.log(location.search);  Query Params

//     return (
//         <div>
//             <h1>State: {onlineState}</h1>
//             {/* <h1>State: {location.state.online}</h1> */}
//         </div>
//     );
// }

// export default Statepage;

import React from 'react';
import { useLocation } from "react-router-dom";

const Statepage = () => {
    // const location = useLocation();
    const onlineState = sessionStorage.getItem('credentials') 
    ? 
    "The user is online" 
    : 
    "The user is offline";

    console.log(onlineState);

    return (
        <div>
            <h1>State: {onlineState}</h1>
        </div>
    );
}

export default Statepage;
