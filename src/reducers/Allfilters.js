const inititalstate = {
  searcharray: [],
  namesearch: false,
  pricesearch: false,
  searchname: "",
  minamount: Number.MAX_VALUE,
  maxamount:Number.MIN_VALUE
}

const allfilters = (state= inititalstate,action)=>{
    switch (action.type) {
        case "ADDNAME":
          
          return {...state,  namesearch: true, searchname: action.data}
        case "ADDPRICE":
          const newsearcharray2 = [...state.searcharray , action.data];
          const minamount = action.minamount < state.minamount ?  action.minamount : state.minamount;
          const maxamount = action.maxamount > state.maxamount ?  action.maxamount : state.maxamount;
            return {...state, searcharray:newsearcharray2, minamount : minamount , maxamount : maxamount }
        case "CLEARFILTER":
          return {...state, searcharray:[] , namesearch: false, pricesearch: false, minamount : 0, maxamount: 0};
          case "REMOVEPRICEFILTER":
            const afterremovesearcharray =  state.searcharray.filter(ele=> ele!= action.data);
            if(afteremoveremovename.length ==0)
              return {...state , searcharray : afterremovesearcharray ,minamount : Number.MAX_VALUE, maxamount : Number.MIN_VALUE , pricesearch: false};
            else
            return {...state , searcharray : afterremovesearcharray ,minamount : Number.MAX_VALUE, maxamount : Number.MIN_VALUE , pricesearch: true};

              case "REMOVENAMEFILTER":
              const afteremoveremovename = state.searcharray.filter(ele=> ele!= action.data);
              return {...state,  searchname : afteremoveremovename , namesearch: false, searchname: ""};
        default:
            return state;
    }
    
}


export default allfilters;