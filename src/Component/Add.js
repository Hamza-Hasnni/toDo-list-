import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from'../Redux/action'


const Add = () => {
    const [taskNew, setTaskNew] = useState({id:0,
description:"",
isDone:false})
const dispatch = useDispatch(); 
const handelAdd = ()=>{
    dispatch(addTask(taskNew));
    setTaskNew({description:""})};  

     
    return (
        <div>
         <input name="description" type="text" value={taskNew.description}  onChange={(e)=>{
                                                                    setTaskNew({id:Math.floor(Math.random()*100), description :e.target.value,isDone:false})}}/>
         <button disabled={!taskNew.description} onClick={handelAdd }>AddTask</button>   
        </div>
    )
    }


export default Add
