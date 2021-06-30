import { Circle, Heart } from 'react-spinners-css';
//using bit
import Ellipsis from '@bit/joshk.react-spinners-css.ellipsis';
import Facebook from '@bit/joshk.react-spinners-css.facebook';
import { getRandomColor } from '@bit/joshk.jotils.get-random-color'
const Spinner = ()=>{
    return(
        <div className="Spinner">
          <div className="d-flex justify-content-center align-items-center " style={{marginTop:"300px"}}>  <Ellipsis color="#0000FF" /> 
      </div>
        
        </div>
      )
    
}
export default Spinner;