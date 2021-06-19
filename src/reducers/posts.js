const postsreducers =  (state={originaldata:[], copydata:[]},action)=>{
    switch (action.type) {
        case "GETPOSTS":
            
            return {...state, originaldata: action.data, copydata: action.data};
        case "SEARCHBYNAME":
            return {...state, copydata: action.data}
        case "SEACHBYAMOUNT":
            return {...state, copydata: action.data}
        case "SEARCHBYNANDM":
            return {...state, copydata: action.data}; 
        default:
            return state
    }
}
export default postsreducers;