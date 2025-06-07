// props
import {React,useState} from 'react';
import styled from "styled-components";

const Div = styled.div`
color:${(props) => props.selected ? "blue" : "yellow" };
background-color: silver;
/* &:hover {
color:red;
} */

@media (max-width: 1200px){
 background-color:aqua;
}

`;


function Banner({title,description,rumberofstudent}) {
const [selected, setSelected] = useState(true);

 
// const {title,description,rumberofstudent} = props; --> 1

  return (
    <Div selected={selected} >
        <button onClick={() => setSelected((s) => !s)}>Change</button>
        <hr/>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{rumberofstudent} student</span>
        <hr/>

    </Div>
  )
}

export default Banner