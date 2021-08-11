import React,{useState} from 'react'

export default function Login() {
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const handleSubmit = (e)=>{e.preventDefault()
    console.log(email,password)
}
    return (
        <div className="center container" style={{maxwidth:"500px"}}>
            <h3>please login !! </h3>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="input-field">
          
                <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn blue">Login</button>
            </form>
        </div>
    )
}
