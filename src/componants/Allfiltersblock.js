import Filter from './subcomponant/filter';
import { useSelector} from 'react-redux';
const Allfilters = ()=>{
    const allfilters  = useSelector(state=> state.ALLFILTERS);
    console.log("allfuter",allfilters);
    
    return (
        <div className="Allfilters">
            {allfilters.searchname== ""? <h1></h1>:<h1>{allfilters.searchname}</h1>}
           {allfilters.searcharray.map((filtername, index)=>(
               <div key={index}> 
               <h1>{filtername}</h1>
               </div>
           ))}
        </div>
    )
}
export default  Allfilters;