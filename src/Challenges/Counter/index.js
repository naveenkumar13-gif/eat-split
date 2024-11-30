import React, { useState } from 'react';

const Index = () => {
    const[count,setCount]=useState(0)
    const[step,setStep]=useState(0)

    const date=new Date()
    date.setDate(date.getDate()+count)

    function handleReset(){
        setCount(0)
        setStep(0)
    }
    return (
<>

        <div>
            <button onClick={()=>setStep((c)=>c-1)}> -</button>
            <span>step:{step}</span>
            <button onClick={()=>setStep((c)=>c+1)}> +</button>
        </div>
        <div className='my-4'>
            <button onClick={()=>setCount((c)=>c-step)}> -</button>
            <span>count:{count}</span>
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
