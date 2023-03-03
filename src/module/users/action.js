import * as usersService from './service';

export const fetchUsers = () => {
    return  (dispatch) => {
        usersService.getUsers()
        .then(response => {
            console.log('Users response ' , response)
            dispatch({type : 'FETCH_USERS' , payload : response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
}
export const viewUserDetails = (id) => {
    return (dispatch) => {
        usersService.getUser(id)
        .then(response => {
            console.log('user response ' ,response)
            dispatch({type : 'VIEW_USER_DETAILS' , payload : response.data});
            dispatch({type : 'SHOW_MODAL'})  
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const hideModal = () => {
    return (dispatch) => {
        dispatch({type : 'HIDE_MODAL'});
    }
}