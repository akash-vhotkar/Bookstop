const postsreducers =  (state=[],action)=>{
    switch (action.type) {
        case "GETPOSTS":
            return action.data;
        case "SEARCHBYNAME":
            return action.data
        case "SEACHBYAMOUNT":
            return action.data
        case "SEARCHBYNANDM":
            return action.data; 
        default:
            return state
    }
}
export default postsreducers;