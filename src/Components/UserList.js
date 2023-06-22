import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserAction } from "../config/actions";

function UserList (){

    const users = useSelector(data=>data.users)

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(DeleteUserAction(id))
    }

    return(
        <div >
            <h1>User List</h1>
 

            <div className="container mt-5">

           
            <div className="float-start mb-1 ">
            <Link to="/create-user">
            <button className="btn btn-primary">Create User</button>
            </Link>
            </div>
            <table className=" table table-striped table-dark table-bordered " >
                <thead >
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                   {
                    users.map((user, index)=>{
                        return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
        
                                
                                <td className=" ">
                                    <Link to={`/update-user/${user.id}`}>
                                    <button className=" btn btn-success  " style={{width:'70px',marginRight:'5px'}}>Update</button>
                                    </Link>
                                    <button onClick={()=> handleDelete(user.id)} className="btn btn-danger " style={{width:'70px'}}>Delete</button>
                                </td>
                        </tr>
                        )
                    })
                   }
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default UserList;