import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import {deleteTask } from '../Redux/action'
import { isDone } from '../Redux/action';
import EditTask from './EditTask';
import './Task.css'

 

const Task = ({element}) => {
    const [done, setDone]=useState(element.isDone);
    const  dispatch = useDispatch();
  
    
    return (
        <div className="Hamza" style={element.isDone ? {border:"3px solid rgb(71, 140, 219)",backgroundColor:"rgb(71, 140, 219)"}:{border:"3px solid rgb(148, 7, 190)"}}>

        <h4  style={element.isDone ? {textDecoration:"line-through"}:{textDecoration:"none"}}>{element.description}</h4> 
        
        <EditTask task = {element}/>
        
        <button onClick={()=>dispatch(deleteTask(element.id))}>X</button>
        <input type="checkbox" defaultChecked={done} id="scales" name="scales" onChange={()=>{
            setDone(!done);
            dispatch(isDone(element.id))
         }
        } />
       </div>
           
           
        
    )
}
 
export default Task
