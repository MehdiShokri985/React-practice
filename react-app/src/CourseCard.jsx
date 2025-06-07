import "./CourseCard.css";
import { useState } from "react";
function CourseCard({data:{name,description}}) {
    // console.log(props)
  const [selected,setSelected] = useState();

  const cssStyle= {
    color:"red",
    border:"1px solid blue",
    margin:"10px",
    backgroundColor:"yellow"
  };

  const selectedClass ={
    color :"green"
  };
  return (
    
        // <li className={`container ${selected && "selected"}`}>
        // <li style={{color:"red",border:"1px solid blue",margin:"10px",backgroundColor:"yellow"}}>
        // <li style={selected ? selectedClass : cssStyle }>
        // <li style={{color: selected ? "green":"red"} }>
        <li style={{color: selected ? "green":"red"} }>
            <h4>{name}</h4>
            <p>{description}</p>
            <button onClick={() => setSelected((s) => !s)}>change</button>
        </li>
    
 
  )
}

export default CourseCard