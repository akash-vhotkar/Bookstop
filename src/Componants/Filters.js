import { useEffect } from 'react';
import {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
const Filters =  ()=>{
    const [ bookname , setsearchbookname] = useState("");
    const [pricefilter , setpricefilter]  = useState({price1: false, price2: false, price3: false, price4 : false})
    const allfilters = useSelector(state=> state.ALLFILTERS);
    const dispatch = useDispatch();
    
    
    function handelnamesearch(e){
        e.preventDefault();
        setsearchbookname("");
        dispatch({type:"ADDNAME", data: bookname});


    }
    
    
    useEffect(()=>{
       
        if(allfilters.namesearch === true && allfilters.pricesearch=== true){
            dispatch({type:"NAMEANDPRICESEARCH", minamount: Math.min(...allfilters.pricearray), maxamount : Math.max(...allfilters.pricearray), name : allfilters.searchname})
        }
        else if(allfilters.namesearch === true && allfilters.pricesearch === false){
            dispatch({type:"NAMESEARCH", name : allfilters.searchname})
        }
        else if(allfilters.namesearch === false && allfilters.pricesearch === true){
            dispatch({type:"PRICESEARCH", minamount: Math.min(...allfilters.pricearray), maxamount : Math.max(...allfilters.pricearray)})

        }
        else{
            dispatch({type:"CLEAR"})
        }
       
    },[allfilters])


    
    
    function handelpricesearch(e){
        e.preventDefault();
    }



    function handelclearallfilters(e){
        e.preventDefault();
        dispatch({type:"CLEARFILTER"});
        setsearchbookname("");
        setpricefilter({price1: false, price2: false, price3: false, price4 : false}); 
    }


    function handelchangeprice(e){
        let name= e.target.name;
        let checkedstatus =  e.target.checked;
        if(checkedstatus=== true){
            if(name=== "price1")       dispatch({type:"ADDPRICE", data:"400-700",minamount: 400, maxamount: 700});
            else if(name==="price2")       dispatch({type:"ADDPRICE", data:"800-1000", minamount: 800, maxamount: 1000});
            else if(name==="price3")       dispatch({type:"ADDPRICE", data:"1100-1300", minamount: 1100, maxamount: 1300});
            else  dispatch({type:"ADDPRICE", data:"1400-1600", minamount:1400, maxamount: 1600})


        }
        else{
            if(name=== "price1")       dispatch({type:"REMOVEPRICEFILTER", data:"400-700", minamount: 400, maxamount: 700});
            else if(name==="price2")    dispatch({type:"REMOVEPRICEFILTER", data:"800-1000", minamount: 800, maxamount: 1000});
            else if(name==="price3")       dispatch({type:"REMOVEPRICEFILTER", data:"1100-1300", minamount: 1100, maxamount: 1300});
            else  dispatch({type:"REMOVEPRICEFILTER", data:"1400-1600", minamount: 1400, maxamount: 1600})


        }
        
        
       if(name==="price1")  setpricefilter({...pricefilter, price1:  checkedstatus});
       else if(name==="price2") setpricefilter({...pricefilter, price2: checkedstatus});
       else if(name=== "price3") setpricefilter({...pricefilter , price3 :checkedstatus});
       else setpricefilter({...pricefilter, price4 :checkedstatus}); 
       
    }
    
    return (
        <div className="Filters">
           <h4>All Filter </h4>
                    <p  onClick={handelclearallfilters} style={{color:"blue"}}>clear all filters</p>

                    <div className="allfileter mt-4">
                            <div className="form-group w-100 ">
                            <form onSubmit={handelnamesearch}>
                       
                                <label htmlFor="" className="w-100">Enter  the book name</label>
                                <input type="text" className="w-100 m-2 form-control" value={bookname} onChange={(e)=> { setsearchbookname(e.target.value)}} placeholder="Enter the book name" />
                                <input type="submit" value="Serach" className="btn btn-primary w-100 m-2" />
                                </form>
                            </div>
                       
                    </div>
                    <div className="price_range mt-4">
                        <form onSubmit={handelpricesearch}>
                        <p>serach by price</p>
                            <div >
                            <input type="checkbox" checked={ pricefilter.price1} onChange={(e)=>handelchangeprice(e)}   name="price1"  />
                            <label htmlFor="">400-700 RS</label>
                        </div>
                        <div >
                            <input type="checkbox"  checked={ pricefilter.price2} onChange={(e)=>handelchangeprice(e)}  name="price2" />
                            <label htmlFor="">800-1000 RS</label>
                        </div>

                        <div >
                            <input type="checkbox"  checked={ pricefilter.price3} onChange={(e)=>handelchangeprice(e)}  name="price3" />
                            <label htmlFor="">1100-1300 RS</label>
                        </div>

                        <div >
                            <input type="checkbox"  checked={ pricefilter.price4} onChange={(e)=>handelchangeprice(e)}  name="price4" />
                            <label htmlFor="">1400-1600 RS</label>
                        </div>


                        
                        
                    
                        </form>
                    </div>
                    
        </div>
    )
}
export default  Filters;