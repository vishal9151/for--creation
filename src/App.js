import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name,setName]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Hii your name is ${name}`);
    setName("");
  }
  return (
    <div className="App">
      Enter your name
     <form>
       <input value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
       <button onClick={(e)=>handleSubmit(e)}>Submit</button>
     </form>
    </div>
  );
}
