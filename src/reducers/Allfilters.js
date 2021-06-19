const inititalstate = {
  searcharray: [],
  namesearch: false,
  pricesearch: false,
  searchname: "",
  pricearray: []
}

const allfilters = (state = inititalstate, action) => {
  switch (action.type) {
    case "ADDNAME":
      return { ...state, namesearch: true, searchname: action.data }
    case "ADDPRICE":
      const newsearcharray2 = [...state.searcharray, action.data];
      const newpricearray = [...state.pricearray, action.minamount, action.maxamount];
      return { ...state, searcharray: newsearcharray2, pricearray: newpricearray, pricesearch: true }
    case "CLEARFILTER":
      return { ...state, searcharray: [], namesearch: false, pricesearch: false, pricearray:[], searchname:""};
    case "REMOVEPRICEFILTER":
      const afterremovesearcharray = state.searcharray.filter(ele => ele != action.data);
      const newpricearray2 = state.pricearray.filter(ele=>  ele!= action.minamount && ele!= action.maxamount);
      console.log("new price arrat", newpricearray2, "and len", );
      if(newpricearray2.length !=0) {
        return {...state , searcharray: afterremovesearcharray, pricearray: newpricearray2};

      }
      else {
        return {...state , searcharray: afterremovesearcharray, pricearray: newpricearray2, pricesearch: false};

      }
    case "REMOVENAMEFILTER":
      
      return { ...state,  namesearch: false, searchname: "" };
    default:
      return state;
  }

}


export default allfilters;