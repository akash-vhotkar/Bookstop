import {useState} from 'react';
import { useDispatch} from 'react-redux';
import { clearfilters} from '../actions/index'
const Filters =  ()=>{
    const [ bookname , setsearchbookname] = useState("");
    const [ searchamount , setsearchamount] = useState({minamount : 0, maxamount: 0});
     const dispatch = useDispatch();
    function clearfilter(e){
        dispatch(clearfilters);
    }
   
    
    return (
        <div className="Filters">
           <h4>All Filter </h4>
                    <a href="" onClick={clearfilter}>clear all filters</a>

                    <div className="allfileter mt-4">
                            <div className="form-group w-100 ">
                            <form>
                       
                                <label htmlFor="" className="w-100">Enter  the book name</label>
                                <input type="text" className="w-100 m-2 form-control" onChange={(e)=> { setsearchbookname(e.target.value)}} placeholder="Enter the book name" />
                                <input type="submit" value="Serach" className="btn btn-primary w-100 m-2" />
                                </form>
                            </div>
                       
                    </div>
                    <div className="price_range mt-4">
                        <form >
                        <p>serach by price</p>
                        <div>
                            <input type="checkbox" onChange={(e)=> {
                                if(e.checked== false){
                                    setsearchamount({...searchamount , minamount: 300 , maxamount: 400})

                                }
                                }} />
                            <label htmlFor="" >300-400 RS</label>
                        </div>
                        <div>
                            <input type="checkbox" onClick={()=> setsearchamount({...searchamount , minamount: 400 , maxamount: 900}) } />
                            <label htmlFor="">400-900 RS</label>
                        </div>

                        <div>
                            <input type="checkbox" onClick={()=> setsearchamount({...searchamount , minamount: 1000 , maxamount: 1400})} />
                            <label htmlFor="">1000-1400 RS</label>
                        </div>
                        <div>
                            <input type="checkbox" onClick={()=> setsearchamount({...searchamount , minamount: 1300 , maxamount: 5400})} />
                            <label htmlFor="">1300-5400 RS</label>
                            <input type="submit" value="Serach" className="btn btn-primary w-100 m-2" />
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