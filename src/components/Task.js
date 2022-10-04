import React from 'react'
import { FaTimes} from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle}) => {
    return (
        // <div style={{backgroundColor: 'gray', width:500}}>
        <div style={{}} onDoubleClick = {()=>onToggle(task.id)}>
            <div className={`d-block p-2  text-black mt-3 ${
                task.reminder? 'blockquote':''
            }`}
            >                
                    <span className="float-left">{task.text}</span>
                    <span className="float-right"><FaTimes 
                    style={{
                        color: 'red',
                        cursor: 'pointer'
                    }}
                    onClick={()=>onDelete(task.id)}
                    /></span>
            </div>
            <div className="d-block p-2 mt-3">                

                <p>{task.day}</p> 
                </div>

            {/* 
            <h1 className="float-left">
                {task.text}
                <span className="float-right"><FaTimes /></span>
            </h1>
            <p>{task.day}</p> */}
        </div>
    )
}


export default Task
