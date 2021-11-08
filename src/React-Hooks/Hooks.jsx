import React ,{useState , useEffect}from 'react'
import './style.css'

const Hooks = () =>{
    const [data,setData] = useState(0)

    useEffect(()=>{
        document.title=`Chats(${data})`
    })

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

export default Hooks;