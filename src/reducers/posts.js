const postsreducers =  (state=[],action)=>{
    switch (action.type) {
        case "GETPOSTS":
            return action.data;

        case "SEARCHBYBOOKNAME":
            return action.data.find(post => post.bookname=== action.bookname);    
        default:
            return state
    }
}
export default postsreducers;