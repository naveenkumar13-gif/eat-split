import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
// import Index from "./usePopcone/Index"

import StartRating from './usePopcone/StartRating';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App /> */}
{/* <Index/> */}
  
    
    <StartRating maxRating={5}/>
    
   
    
  </React.StrictMode>
);


