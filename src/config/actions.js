export const AddUserAction =(user) => {
    return { type: 'Add_user', pyload:user}
}
export const UpdateUserAction =(newuser)=>{
    return { type:'Update_user', pyload:newuser}
}

export const DeleteUserAction = (id) =>{
    return {type:'Delete_user', pyload:id}
}