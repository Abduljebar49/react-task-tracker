import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle}) => {
    return (
        <div style={{width:500,height:900}} className="container">
          {tasks.map((task)=> (
              <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
          ))}  
        </div>
    )
}

export default Tasks
