import React, { useState } from 'react';

const Index = () => {
    const[step,setStep]=useState(1)
    const[count,setCount]=useState(0)

    const date=new Date()
    date.setDate(date.getDate()+count)

    function handleReset(){
        setCount(0)
        setStep(0)
    }
    return (
            <>
        <div>
            
 <input type='range' min={0} max={10} value={step}  onChange={(e)=>setStep(Number(e.target.value))}/>
            <span>step:{step}</span>
           
        </div>
        <div className='my-4'>
            <button onClick={()=>setCount((c)=>c-step)}> -</button>
            <input type='text' value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
          
            <button onClick={()=>setCount((c)=>c+step)}> +</button>
        </div>
       <div>
       <span>{count===0 ? 'Toady is':count>0 ? ` ${count} days from todays is `:` ${Math.abs(count)} days from was `}</span>
       <span>{date.toDateString()}</span>
       </div>
      { count !== 0 || step !== 0 ? <button onClick={handleReset}>Reset</button>:''}
        </>
    );
}

export default Index;
