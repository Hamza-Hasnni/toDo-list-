let initialState={
    toDo:[],
}

 const reducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case 'AddTask':
         return {...state,toDo:[...state.toDo,payload]}   
        case'DeleteTask':
        return {...state,toDo:state.toDo.filter(el=>el.id !==payload) }
        case'IsDone':
        return{ ...state,toDo:state.toDo.map(el=>el.id===payload ? {...el,isDone:!el.isDone} : el ) }
        case'EditTask':
        return {...state,toDo:state.toDo.map(el=>el.id===payload.id? {...el,description:payload.description }:el )}
        
        default:
            return state
            
    }
}



export default reducer
