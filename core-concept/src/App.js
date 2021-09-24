// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const allFriends = [
    { name: "ashik", id: "50", nationality: "Bangladeshi" },
    { name: "nahid", id: "80", nationality: "England" },
    { name: "Anis", id: "100", nationality: "America" },
  ];
  return (
    <div>
      {/* Components Gose Here */}
      <h2>My Friend List</h2>
      <Counter></Counter>
      {allFriends.map((myFriends) => (
        <Friend mf={myFriends}></Friend>
      ))}
     
    </div>
  );
}

function Friend(props) {
  const friendStyle = {
    backgroundColor: "gray",
    border: "1px solid black",
    marginTop: "5px",
    width: "300px",
    marginLeft: "10px",
    padding: "10px",
    color: "white",
  };
  const {name,id,nationality}=props.mf
  return (
    <div style={friendStyle}>
      <h4>
        Name : <span>{name}</span>
      </h4>
      <h4>
        Id : <span>{id}</span>
      </h4>
      <h4>
        Nationality : <span>{nationality}</span>
      </h4>
    </div>
  );
}


function Counter(){
 const [myCount,setCount] = useState(0)

 const increaseValue=()=>{
   const newValue=myCount+1
   setCount(newValue)
 }
 const decreaseValue=()=>{
   const newValue=myCount-1
   setCount(newValue)
 }

  return(
    <div>
      <h1>Count : {myCount}</h1>
      <button onClick={increaseValue}>+++</button>
      <button onClick={decreaseValue}>---</button>
    </div>
  )
}

export default App;
