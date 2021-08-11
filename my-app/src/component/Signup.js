import React,{useState} from 'react'

export default function Signup() {
    const[name,setName]=useState('')
    const[name1,setName1]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit =(e)=>{e.preventDefault()
    console.log(email,password,name,name1,phone)}
    return (
        <div className="center container" style={{maxwidth:"500px"}}>
            <h3>Please Signup !! </h3>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="input-field" >
          
                <p><input type="name" placeholder="First name" onChange={(e)=>setName(e.target.value)}/></p>
                <input type="name" placeholder="Last name" onChange={(e)=>setName1(e.target.value)}/>
                <input type="tel" placeholder="888 888 8888" onChange={(e)=>setPhone(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn blue">Login</button>
            </form>
        </div>
    )
}
