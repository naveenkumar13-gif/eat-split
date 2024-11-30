import React, { useState } from 'react';
import { useEffect } from 'react';

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`


const Index = () => {
    const[inputvalue,setInputValue]=useState(1)
    const[fromAmot,setFromAmot]=useState('INR')
    const[toAmot,setToAmot]=useState('USD')
    const[converted,setConverted]=useState('')
    const[isLoading,setIsLoading]=useState(false)
     



    useEffect(function(){
      async  function convert(){
        setIsLoading(true)
         const res= await  fetch(`https://api.frankfurter.app/latest?amount=${inputvalue}&from=${fromAmot}&to=${toAmot}`)
         const data=await res.json()
         setConverted(data.rates[toAmot]);
         setIsLoading(false)
        }

        if(fromAmot === toAmot) return   setConverted(inputvalue)
        convert()
    },[inputvalue,fromAmot,toAmot]
)
    return (
        <div>
       <input type='text' placeholder='Amount' value={inputvalue} onChange={(e)=>setInputValue(Number(e.target.value))} disabled={isLoading}/>
       <select value={fromAmot} onChange={(e=>setFromAmot(e.target.value)) }disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      
       </select>
       <select  value={toAmot} onChange={(e=>setToAmot(e.target.value)) }disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      
       </select>
       <p>{converted} {toAmot} </p>
        </div>
    );
}

export default Index;
