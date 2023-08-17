import Button from "./Button"
import { useState , useEffect, useReducer} from "react"

const AddandMinus = () => {

    const ACTIONS = {
        INCREMENT: 'increment',
        DECREMENT: 'decrement'
    }

    const reducer=(state, action)=>{
           switch(action.type){
                case ACTIONS.INCREMENT:
                    return{ count : state.count + 1}
                case ACTIONS.DECREMENT:
                    return{ count : state.count - 1}
                default :
                return state
           }
    }
    const [state, dispatch] = useReducer(reducer, {count: 10})

  


// const [count, setCount] = useState(22)

useEffect(()=>{
    console.log('just rendered an effect')
},[state.count])

    const decrease = () =>{
        // setCount(prev => prev - 1)
        //   dispatch({type: 'decrement'})
        dispatch({type: ACTIONS.DECREMENT})
    }
    const increase = () =>{
        // setCount(prev => prev + 1)
        // dispatch({type: 'increment'})
        dispatch({type:ACTIONS.INCREMENT})
    }

  return (
    <div className="bg-gray-100 py-2 px-10 rounded " > 
                
        <button className="px-2" onClick={decrease}>-</button> 
        <span className="px-2"> {state.count} </span>
        <button className="btn px-2" onClick={increase}>+ </button>
    </div>
  )

}
export default AddandMinus