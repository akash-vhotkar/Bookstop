const postsreducers =  (state={originaldata:[], copydata:[]},action)=>{
    switch (action.type) {
        case "GETPOSTS":
            
            return {...state, originaldata: action.data, copydata: action.data};
        case "SEARCHBYNAME":
            return {...state, copydata: action.data}
        case "NAMEANDPRICESEARCH":
            const newcopydata = state.originaldata.filter(ele=> ele.bookname.toLowerCase().includes(action.name) && (ele.amount>action.minamount && ele.amount < action.maxamount))
            console.log("originaldata ", state.originaldata,"  copydata ", state.copydata);
            return {...state, copydata: newcopydata};
        case "NAMESEARCH":
            const newcopydata2 = state.originaldata.filter(ele=>ele.bookname.toLowerCase().includes(action.name) )
            return {...state, copydata: newcopydata2}; 
        case "PRICESEARCH":
            const newcpydata3 = state.originaldata.filter(ele=>  (ele.amount>action.minamount && ele.amount < action.maxamount))
            console.log("minamount ", action.minamount," and maxamount ", action.maxamount, " newdata ", newcpydata3);
            return  {...state, copydata : newcpydata3}
        case "CLEAR":
            const orifinaldata4 = state.originaldata;
            return {...state, copydata:orifinaldata4}
        default:
            return state
    }
}
export default postsreducers;