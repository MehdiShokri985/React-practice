//List rendering
function CourseList (){
    // const courses =["react","java","js","Node"];
    const courses =[
        {id:1,name:"react"},
        {id:2,name:"java"},
        {id:3,name:"js"},
        {id:4,name:"Node"}];
   
    return(

        <div>
            <h3>Course List</h3>
            <ul>
            {/* {courses.map((course,index) => (<li key={index}>{course}</li>))} */}
            {courses.map((course) => (<li key={course.id}>{course.name}</li>))}

            </ul>
        </div>
    );
}

export default CourseList; 