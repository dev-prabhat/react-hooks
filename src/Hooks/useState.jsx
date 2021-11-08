import React ,{useState}from 'react'
import './style.css'

const UseState = () =>{
    const [data,setData] = useState(0)

    return(
     <div>
         <div className="center_div">
           <p>{data}</p>
           <div className="button2" onClick={()=>setData(data+1)}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
                INCR
           </div>
           <div className="button2" onClick={()=> data > 0 ? setData(data-1) : setData(0) }>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               DECR
           </div>
         </div>
     </div>
    )
}

export default UseState;