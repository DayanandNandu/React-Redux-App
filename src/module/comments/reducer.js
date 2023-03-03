const initialState = {
    comments : []
};

const commentsReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'FETCH_COMMENTS' :
            const commentsList = action.payload;
            console.log('Comments List' ,commentsList)
            return {...state , comments : [...commentsList]}
        default :
            return {...state}
    }
}
export default commentsReducer