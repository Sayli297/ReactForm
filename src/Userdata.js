import React, {useEffect} from 'react'
import axios from 'axios'

function Userdata()

{

    const[user, setUser]=React.useState()

    useEffect(()=>{
        axios.get("http://localhost:8989/api/user/61d318f2a69acfda1cfc23d9")
        .then(response=>console.log(response))
        // .then(res=>{
        // setUser(res)
        
        // })

    },[])

return (
    <div>
        <h1>User Component</h1>
    </div>
)

}
export default Userdata