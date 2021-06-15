const intialstate = {
    searchbybookname:{
        isserchbybookname: false,
        booknameis: null
    },
    searchbyprice:{
        minamount: -1,
        maxamount: -1,
        issearchbyprice: false
    }
}

const  searchreducer =  (state = intialstate, action)=>{
    switch (action.type) {
        case "UPDATEBOOKNAME":
            return  {...state, bookname: action.bookname}
        case "UPDATEMINANDMAX": 
        return { ...state , minamount: action.minamount,maxamount: action.maxamount}
        default:
            return state
    }
    
}
export default searchreducer;