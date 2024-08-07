import React, { useState } from 'react';
import Button from './button';
export default function FormSplitBill({selectFriend,onSplitBill}){
  const[bill ,setBill]=useState("");
  const [padiByUser,setPadiByUser]=useState('')
  const friendBill= bill ? bill-padiByUser: "";
  const[ whoIsPaying ,setWhoIsPaying]=useState("user")
  
  
  
  function handleSplitBill(e){
    e.preventDefault();

    if(!bill || !padiByUser) return
    
    onSplitBill(whoIsPaying === 'user' ? friendBill : -padiByUser)
   
  }
  
  
    return (
      <form className='
      form-split-bill' onSubmit={handleSplitBill}>
        <h2>Split a bill with  {selectFriend.name}</h2>
        <label>Bill value</label>
      <input type='text' value={bill} onChange={(e)=>setBill(Number(e.target.value))}/>
  
      <lable>Your Expense</lable>
      <input type='text' value={padiByUser} onChange={(e)=>setPadiByUser(Number(e.target.value) > bill ? padiByUser : Number(e.target.value) )}/>
  
      <lable> {selectFriend.name} Expense</lable>
      <input type='text' disabled value={friendBill}/>
  
      <label> Who is paying the bill</label>
      <select  value={whoIsPaying} onChange={(e)=>setWhoIsPaying(Number(e.target.value))}>
        <option value='user' >You</option>
        <option value='friend'> {selectFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
      </form>
    )
  }
