import React, { useState } from 'react';
import FirendsList from './friendList';
import Button from './button';
import FormAddFriend from './formfriend';
import FormSplitBill from './formBill';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// main components
export default function App(){

  const[show ,setshow]=useState(false)
  const[friends, setfriends]=useState(initialFriends)
  const[selectFriend,setSelectedFriend]=useState(null)

function handleClick(){
  setshow((show)=>!show )
}


function handleAddFriends(friend){
  setfriends((friends)=>[...friends,friend])
  setshow(false) 
  // setfriends(false)
}


function handleSlection(friends){
  // setSelectedFriend(friends)
  setSelectedFriend((current)=>current?.id=== friends.id ? null : friends)
  setshow(false)
}


function handleSplitBill(value){
 setfriends((friends) => friends.map((friend)=>friend.id=== selectFriend.id ? {...friend , balance:friend.balance + value} :friend))
setSelectedFriend(null)

}

  return(
    <div className='app'>
      <div className='sidebar'>
      < FirendsList  friends={friends} selectFriend={selectFriend} handleSlection={handleSlection}/>
      
     {show && <FormAddFriend  onAddFriends={handleAddFriends} />}

      <Button onClick={handleClick} >{ show ? 'close':'Add friend' }</Button>
      </div>
      {selectFriend && <FormSplitBill selectFriend={selectFriend} onSplitBill={handleSplitBill} />}
    
    </div>
  )
}








