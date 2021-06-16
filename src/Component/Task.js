import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import {deleteTask } from '../Redux/action'
import { isDone } from '../Redux/action';
import EditTask from './EditTask';

 

const Task = ({element}) => {
    const [done, setDone]=useState(element.isDone);
    const  dispatch = useDispatch();
  
    
    return (
        <div style={{display:'flex',justifyContent:'space-around', border:"1px solid red"}}>

        <h4>{element.description}</h4> 
        
        <EditTask task = {element}/>
        
        <button onClick={()=>dispatch(deleteTask(element.id))}>X</button>
        <input type="checkbox" id="scales" name="scales" onChange={()=>{setDone(!done);dispatch(isDone(element.id))}} />
       </div>
           
           
        
    )
}
 
export default Task
