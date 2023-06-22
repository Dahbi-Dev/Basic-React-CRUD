const  initialState = {
    users:[
        {
            id: 1,
            name: 'Houssam',
            email: 'houssam@gmail.com'
        },
        {
            id: 2,
            name: 'Bilal',
            email: 'bilal@gmail.com'
        }
    ]
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_user':
            return {...state, users:[...state.users, action.pyload]}
        case 'Update_user':
            const user = state.users.find((u)=>u.id===parseInt(action.pyload.id))
            if(user){
                user.name = action.pyload.name
                user.email = action.pyload.email
            }
            
            return state
            
            case 'Delete_user':
                default:
                return {...state, users:[...state.users.filter((u)=>u.id!==parseInt(action.pyload))]}    }
            }
export default reducer