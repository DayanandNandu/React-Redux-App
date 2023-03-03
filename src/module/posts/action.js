import * as postsService from './service'

export const fetchPosts = () => {
    return (dispatch) => {
        postsService.getPosts()
        .then(response => {
            console.log('Post Response ' , response)
            dispatch({type : 'FETCH_POSTS' , payload : response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
}