import React ,{useReducer , useEffect}from 'react'
import './style.css'

const reducer = (state,action)=>{
    if(action.type === "INCR"){
        state = action.state
    }
    if(state > 0 && action.type === "DECR"){
        state--
    }
    return state
}

const UseReducer = () =>{
    const initialData = 10
    const [state, dispatch] = useReducer(reducer,initialData)

    useEffect(()=>{
        document.title=`Chats(${state})`
    })

    return(
     <div>
         <div className="center_div">
           <p>{state}</p>
           <div className="button2" onClick={()=>dispatch({type:"INCR",state:state+2})}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
                INCR
           </div>
           <div className="button2" onClick={()=> dispatch({type:"DECR"})}>
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

export default UseReducer;