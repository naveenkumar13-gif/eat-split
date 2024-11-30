import React from 'react';
import ReactDOM from 'react-dom/client';
import  Counter from './Challenges/Counter/Counter-2/index copy 3'
// import UsePopcone from '../src/usePopcone/Index'
// function Test(){
//   const[movi,setMovi]=useState(0)
//   return(
//     <div>
//       <StartRating  maxRating={10}  color="blue" onRated={setMovi}/>
//       <p>this movie was rated {movi} stars </p>
//     </div>
//   )
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/*  
<UsePopcone/> */}
{/* <Index/> */}
<Counter/>
  </React.StrictMode>
);


