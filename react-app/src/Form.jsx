import { useState } from "react";

const Form =() =>{

    // const [email,setEmail] = useState(""); 
    // const [password,setPassword] = useState(""); 
    // const [role,setRole] = useState("user"); 
    // const [gender,setGender] = useState("male"); 
    // const [rules,setRules] = useState(false); 

    const [form,setForm] = useState({
        email:"",
        password:"",
        role: "user",
        gender:"male",
        rules:false,
    });

    const changeHandler = (event) =>{
        
        const name = event.target.name;
        const value = event.target.value;
        if(name === "rules"){
            setForm((form) => ({ ... form , rules: !form.rules })); 
        }
        else{

           setForm((form) => ({ ... form , [name]: value }));  
        }
    };

    const submitHandler = (event) =>{
       event.preventDefault();
       console.log(form);     
    };

    // const loginHandler = () =>{
    //    console.log(form);     
    // };
    // const emailHadler =(event) =>{
   
    //     setEmail(event.target.value);
    // }

    // const passwordHandler =(event) =>{

    //     setPassword(event.target.value)
    // }

    // const selectHandler = (event) =>{
    //     //console.log(event.target.value);
    //     setRole(event.target.value);
    // }

    // const genderHandler = (event) =>{
    //     //console.log(event.target.value);
    //     setGender(event.target.value);
    // }

    //   const rulesHandler = () =>{
        
    //     setRules((rules) => !rules)
    // }

    return (
        <div>
          <form onSubmit={submitHandler}>
            <input 
                type="text" 
                placeholder="Email" 
                name="email"
                // value={email} 
                value={form.email} 
                // onChange={emailHadler}  
                // onChange={(event) => setEmail(event.target.value)}  
                onChange={changeHandler}  
            />

            <input 
                type="password" 
                placeholder="password" 
                name="password"
                // value={password} 
                value={form.password} 
                // onChange={passwordHandler} 
                onChange={changeHandler} 
            />

           
           
           <select 
               //value={role} 
               value={form.role} 
               name = "role"
               // onChange={selectHandler}
               onChange={changeHandler}
            > 
            <option value="Admin">Admin</option>
            <option value="user">user</option>
            <option value="edito">edito</option>
           </select>
           <div>
            <label htmlFor="male">male</label>
            <input 
                type="radio" 
                id="male" 
                name="gender" 
                value="male" 
                // onChange={genderHandler} 
                onChange={changeHandler} 
                // checked={gender === "male"}
                checked={form.gender === "male"}
            />
            <label htmlFor="female">female</label>
            <input 
                type="radio" 
                id="female" 
                name="gender"
                value="female" 
                // onChange={genderHandler} 
                onChange={changeHandler} 
                // checked={gender === "female"}
                checked={form.gender === "female"}
            />
            <label htmlFor="other">other</label>
            <input 
                type="radio" 
                id="other" 
                name="gender" 
                value="other" 

                // onChange={genderHandler} 
                onChange={changeHandler} 
                // checked={gender === "other"}
                checked={form.gender === "other"}
            />
         
            
           </div>

           <input type="checkbox" 
        //    checked={rules} 
           name = "rules"
           checked={form.rules} 
        //    onChange={rulesHandler}
           onChange={changeHandler}
           />
           
           
            <button type="submit" 
            // onClick={loginHandler}
             >Login</button>
            </form>
        </div>
    )

}


export default Form;