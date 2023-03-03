const initialState = {
    posts : []
};

const postsReducer = (state = initialState , action) => {
    switch(action.type){
        case 'FETCH_POSTS' :
            const postsList = action.payload;
            return {...state , posts:[...postsList]};
        default :
            return {...state}
    }
}
export default postsReducer;