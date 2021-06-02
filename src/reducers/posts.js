const postsreducers =  (state=[],action)=>{
    switch (action.type) {
        case "GETPOSTS":
            return action.data;
    
        default:
            return state
    }
}
export default postsreducers;