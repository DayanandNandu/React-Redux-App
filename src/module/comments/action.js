import * as commentsService from './service';

export const fetchComments = () => {
    return (dispatch => {
        commentsService.getComments()
        .then(response => {
            dispatch({type : 'FETCH_COMMENTS' , payload : response.data})
        })
        .catch (error => {
            console.log(error)
        })
    })
}