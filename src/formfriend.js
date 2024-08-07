
import React, { useState } from 'react';
import Button from "./button";
 export default function FormAddFriend({onAddFriends}){
  const[name,setName]=useState("")
  const[image,setImage]=useState("https://i.pravatar.cc/48?u=499476")
  
  function handleSubmit(e){
    e.preventDefault();
   if(!name || !image) return
  
  
    const id=crypto.randomUUID()
    const newFriend ={
      name,image:`${image}=${id}`,balance:0,
      id, 
    }
    onAddFriends(newFriend);
    setName("")
  setImage("https://i.pravatar.cc/48?u=499476")
  
  
  }
  
    return <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <lable>Image URl</lable>
      <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}/>
   <Button>Add</Button>
    </form>
  }