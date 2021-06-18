import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from'../Redux/action'


const Add = () => {
    const [taskNew, setTaskNew] = useState({id:0,
description:"",
isDone:false})
const dispatch = useDispatch(); 
// const handelAdd = ()=>{
//     dispatch(addTask(taskNew));
//     setTaskNew({description:""})};  
const handelSubmit =(e)=>
{
    e.preventDefault();
    dispatch(addTask(taskNew));
    setTaskNew({description:""}); 
    
}
     
    return (
        <div style={{backgroundColor:'white'}}>
            <form onSubmit={handelSubmit}>
                <h3>ToDo List : </h3>
         <input name="description" type="text" value={taskNew.description}  onChange={(e)=>{
                                                                    setTaskNew({id:Math.floor(Math.random()*100), description :e.target.value,isDone:false})}}/>
         <button disabled={!taskNew.description} >New Task</button>   
         </form>
        </div>
    )
    }


export default Add
