import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [playername,setplayername]=useState(initialName);

  function handlechange(event){
    console.log(event);
    // this is new concept and put the name and fix the name tame je name rakhavu hoi ae rakhi ne save kari ne fix kari sako onchane and handlechange and another state  no concept
    setplayername(event.target.value);

  }

  function handleEditClick() {
    // setIsEditing(!isEditing);--use state upadating function
    setIsEditing((editing)=>!editing);
  }

  let editableplayername = <span className="player-name">{playername}</span>;
  // let btncaption='Edit';
  if (isEditing) {
    editableplayername = (
    <input type="text" required value={playername} onChange={handlechange} />
    //show that name as a input----conditional content and A Suboptimal Way Of Upadating State
    // btncaption='save' ;
    //another method use ternary expression .
    );
  }

  return (
    <li>
      <span className="player">
        {editableplayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing? 'Save':'Edit'}</button>
    </li>
  );
}