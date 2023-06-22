import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateUserAction } from "../config/actions";


function UpdateUser (){

    const {id} = useParams()
    const user = useSelector(data=>data.users
        .find((u)=>u.id===parseInt(id)))
    const [name , setName] = useState(user.name); 
    const [email , setEmail] = useState(user.email); 

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick =() =>{
        dispatch(UpdateUserAction({
            id: id,
            name:name,
            email:email
        }))
        navigate('/')

    }
     

    return(
        <div>
            <h1>Update User {id}</h1>
                      
            <div className="container mt-4">
                <div class="form-group ">
                    <label className="float-start mb-1">Name :</label>
                    <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div class="form-group mt-2 ">
                    <label className="float-start mb-1">Email :</label>
                    <input type="text" class="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <button className="btn btn-primary mt-2" onClick={handleClick}>Update</button>
                </div>
            </div>
        </div>
       
    )

}
export default UpdateUser