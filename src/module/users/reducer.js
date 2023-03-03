const initialState = {
    users : [],
    userDetails : {},
    showModal : false
}

const usersReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'FETCH_USERS' :
            const usersList = action.payload;
            return {...state , users:[...usersList]};
        case 'VIEW_USER_DETAILS' :
            const user = action.payload;
            return {...state , userDetails:{...user}};
        case 'SHOW_MODAL' :
            return {...state , showModal : true};
        case 'HIDE_MODAL' :
            return {...state , showModal : false};
        default :
            return {...state}
    }
}
export default usersReducer;

