//List rendering
import CourseCard from "./CourseCard";
import styles from "./CourseList.module.css";
import { useState } from "react";
import "./CourseList.css"
function CourseList (){
    // const courses =["react","java","js","Node"];
    const [selected,setSelected] = useState(false);

    const courses =[
        {id:1,name:"react",description:"This is React course"},
        {id:2,name:"java",description:"This is java course"},
        {id:3,name:"js",description:"This is js course"},
        {id:4,name:"Node",description:"This is node course"}];
   //console.log(styles);
    return(
                // <div className={ styles.container}>
                // <div className={ selected ? styles.container : styles.selected}>
                <div>
                    <h3>Course List</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, similique non aut assumenda consectetur dolorem, delectus odio illo itaque voluptates magni unde deleniti a sunt fugit officia. Numquam, expedita voluptatum.</p>
                    <ul>
                    {/* {courses.map((course,index) => (<li key={index}>{course}</li>))} */}
                    
                    {courses.map((course) => (
                        <CourseCard key={course.id} data={course} />
                    ))} 

                    </ul>
                </div>
          );
}

export default CourseList; 