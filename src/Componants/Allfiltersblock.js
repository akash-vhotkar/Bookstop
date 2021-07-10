import Filter from './subcomponant/filter';
import { useSelector} from 'react-redux';
const Allfilters = ()=>{
    const allfilters  = useSelector(state=> state.ALLFILTERS);
    <h1>{allfilters.searchname}</h1>
    
    return (
        <div className="Allfilters d-flex">
            {allfilters.searchname== ""? <h1></h1>:(<div  class="alert alert-success alert-dismissible 
                m-2" role="alert">
                
              <strong>{allfilters.searchname}</strong>
                
              <button type="button" class="btn close" 
                  data-dismiss="alert" aria-label="Close">
                    
                  <span aria-hidden="true">×</span>
              </button>
          </div>)}
           {allfilters.searcharray.map((filtername, index)=>(
              <div key={index} class="alert alert-success alert-dismissible 
                m-2" role="alert">
                
              <strong>{filtername}</strong>
                
              <button type="button" class="btn close" 
                  data-dismiss="alert" aria-label="Close">
                    
                  <span aria-hidden="true">×</span>
              </button>
          </div>
           ))}
        </div>
    )
}
export default  Allfilters;