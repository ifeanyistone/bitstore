import Navbar from "./Navbar"
import { useReducer } from "react"


const reducer = (state, action)=>{

 }
const Collections = () => {

    const [state, dispatch] = useReducer(reducer, {count:"DSS is a criminal organisation", name:"Hunter Biden"})
  return (
    <div>
        <Navbar /> 
       
        
      {state.name}

    </div>
  )
}

export default Collections