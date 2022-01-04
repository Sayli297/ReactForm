import React, {useEffect} from 'react'
import axios from 'axios'

function Form1()
{
    const userObj=
    {
        "firstName" : '',
        "lastName" : '',
        "city" :'',
    }
    
    const[userList, setUserList]=React.useState([])
    const[user, setUser]=React.useState(userObj)

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const sendData=()=>{
        console.log(user);
        axios.post("http://localhost:8989/api/saveUser",user)
        .then(response =>{
            const res=response.data
            if(res.statusCode==201){
                console.log("Data Saved!!!");
                setMessage(res.message)
            }

        })
    }

    
    const[number,setNumber]=React.useState(0)
     useEffect(()=>{
         console.log("hiiiii");
        
         axios.post("http://localhost:3000/api/saveUser")
              .then(response=>response.data)
               .then(res=>{
                   setUserList(res)
               })
      },[number])

    const incrementValue=()=>{
        setNumber(number+1)
    }


    const[message, setMessage]=React.useState('')
    return(

        <div>
        <label htmlFor="firstName">FirstName : </label>
        <input type="text" name="firstName" onChange={onChange}/>
        <label htmlFor="lastName">LastName : </label>
        <input type="text" name="lastName" onChange={onChange}/>
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" onChange={onChange}/>
        <label htmlFor="city">City : </label>
        <input type="text" name="city" onChange={onChange}/>

        <button type="button">Show Name</button>
        <button type="button" onClick={sendData}>Submit</button>
        <button type="button" onClick={incrementValue}>Add</button>

        


        <ul>
                {userList.map((user)=>(
                    <li key={user.id}>{user.name+" | "+user.email}</li>
                ))}
            </ul>
            
            <p>{message}</p>

            <p>This is P tag</p>
        </div>



    )
}

export default Form1