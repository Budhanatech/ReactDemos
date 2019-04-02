// when the reducer runs for the first time, it shoule be assigned some value
const initState = {
    posts: [
        {id: '1', title: 'Some title', body: 'loren ipsum'},
        {id: '2', title: 'Some title 2', body: 'loren ipsum 2'},
        {id: '3', title: 'Some title 3', body: 'loren ipsum 3'}
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;