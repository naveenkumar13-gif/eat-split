 import Friend from "./friend"
 
 export default function FirendsList({friends,handleSlection ,selectFriend}){

  return(
    <ul>{friends.map(friends=> <Friend friends={friends} key={friends.id} handleSlection={handleSlection} selectFriend={selectFriend}/>)}</ul>
  )
}