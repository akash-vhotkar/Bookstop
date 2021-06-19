import { useEffect } from 'react';
import {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { clearfilters} from '../actions/index'
const Filters =  ()=>{
    const [ bookname , setsearchbookname] = useState("");
    const [ searchamount , setsearchamount] = useState({minamount : 0, maxamount: 0});
    const [pricefilter , setpricefilter]  = useState({price1: false, price2: false, price3: false, price4 : false})

    
    const dispatch = useDispatch();
     
    
   
    function handelnamesearch(e){
        e.preventDefault();
        dispatch({type:"ADDNAME", data: bookname});

    }
    useEffect(()=>{

        console.log("currrint price filter" ,  pricefilter);
    },[pricefilter])


    function handelallsearches(){
        
    }
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
            if(name== "price1")       dispatch({type:"ADDPRICE", data:"400-700",minamount: 400, maxamount: 700});
            else if(name=="price2")       dispatch({type:"ADDPRICE", data:"700-900", minamount: 700, maxamount: 900});
            else if(name==="price3")       dispatch({type:"ADDPRICE", data:"900-1300", minamount: 900, maxamount: 1300});
            else  dispatch({type:"ADDPRICE", data:"1300-1500", minamount:1300, maxamount: 1500})


        }
        else{
            if(name== "price1")       dispatch({type:"REMOVEPRICEFILTER", data:"400-700", minamount: 400, maxamount: 700});
            else if(name=="price2")    dispatch({type:"REMOVEPRICEFILTER", data:"700-900", minamount: 700, maxamount: 900});
            else if(name==="price3")       dispatch({type:"REMOVEPRICEFILTER", data:"900-1300", minamount: 900, maxamount: 1300});
            else  dispatch({type:"REMOVEPRICEFILTER", data:"1300-1500", minamount: 1300, maxamount: 1500})


        }
        
        
       if(name=="price1")  setpricefilter({...pricefilter, price1:  checkedstatus});
       else if(name=="price2") setpricefilter({...pricefilter, price2: checkedstatus});
       else if(name== "price3") setpricefilter({...pricefilter , price3 :checkedstatus});
       else setpricefilter({...pricefilter, price4 :checkedstatus}); 
       
    }
    
    return (
        <div className="Filters">
           <h4>All Filter </h4>
                    <a href="" onClick={handelclearallfilters}>clear all filters</a>

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
                            <label htmlFor="">700-900 RS</label>
                        </div>

                        <div >
                            <input type="checkbox"  checked={ pricefilter.price3} onChange={(e)=>handelchangeprice(e)}  name="price3" />
                            <label htmlFor="">900-1300 RS</label>
                        </div>

                        <div >
                            <input type="checkbox"  checked={ pricefilter.price4} onChange={(e)=>handelchangeprice(e)}  name="price4" />
                            <label htmlFor="">1300-1500 RS</label>
                        </div>


                        
                        
                        <div>
                            <input type="submit" value="Show all results" className="btn btn-primary w-100 m-2" />
                        </div>

                        </form>
                    </div>
                    <div className="searchbystars mt-4">
                        <p>Search by stars</p>
                        <div></div>

                    </div>

        </div>
    )
}
export default  Filters;