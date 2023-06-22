import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUserAction } from "../config/actions";

function CreateUser (){

    const count = useSelector(data=>data.users.length)
    const [name , setName] = useState(); 
    const [email , setEmail] = useState(); 

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick =() =>{
        dispatch(AddUserAction({
            id: count+1,
            name:name,
            email:email
        }))
        navigate('/')
     
        
    }


    return(
        <div>
            <h1>Create User</h1>

            <div className="container mt-4">
                <div class="form-group ">
                    <label className="float-start mb-1">Name :</label>
                    <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div class="form-group mt-2 ">
                    <label className="float-start mb-1">Email :</label>
                    <input type="text" class="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <button className="btn btn-primary mt-2" onClick={handleClick}>Create</button>
                </div>
            </div>
         
        </div>
    )

}
export default CreateUser;