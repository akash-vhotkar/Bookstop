const postsreducers =  (state=[],action)=>{
    switch (action.type) {
        case "posts":
            return state;
    
        default:
            return state
    }
}
export default postsreducers;