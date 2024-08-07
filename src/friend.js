 import Button from "./button"
 
 
 export default function Friend({friends,handleSlection,selectFriend}){
  const isSelected=selectFriend?.id ===friends?.id
    return  <li className={isSelected ? "selected" : ""}>
  <img src={friends.image} alt={friends.name}/>
  <h3>  {friends.name}</h3>

  {friends.balance < 0 && <p className='red'>You owe {friends.name} ${Math.abs(friends.balance)}</p>}
  {friends.balance > 0 && <p className='green'>{friends.name}   owes you {Math.abs(friends.balance)}</p>}
  {friends.balance === 0 && <p>You and {friends.name}  are even</p>}
  <Button onClick={()=>handleSlection(friends)} >{isSelected? 'close' : 'select'}</Button>
    </li>
}
