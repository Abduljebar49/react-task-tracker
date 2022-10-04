import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async() => {
      const dataFromServer = await fetchTasks()
      setTasks(dataFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async() =>{

    const reso = await fetch('http://localhost:5000/tasks')

    const data = await reso.json()
    return data
  }

  const [showAddTask, setShowAddTask] = useState(false)
  const onDeleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }
const toggleReminder = (id) => {
  // console.log('task id: '+tasks.id+' task reminder: '+tasks.reminder)
  setTasks(tasks.map((task)=>
  task.id === id? {
    ...task, reminder : !task.reminder
  } : task
  ))

//  console.log('onToggle reminder')
}

const onAddTask = async(task) =>{

  // const id = Math.floor(Math.random()*200)
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])  

  const res = await fetch('http://localhost:5000/tasks',
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  }
  );

  const data = await res.json()
  setTasks(...tasks, data)
}

const onShowAddTask = ()=>{
 setShowAddTask(!showAddTask)
  // console.log('Meshaa bituudhaaf')
}

  return (
    <div className="App">
      <Header title='Task Tracker' onAdd={showAddTask} onShowAddTask={onShowAddTask} />
      {showAddTask && <AddTask onAddTask  ={onAddTask}/>}
      {tasks.length>0? <
        Tasks tasks={tasks} 
        onDelete={onDeleteTask} 
        onToggle = {toggleReminder}
      />
      :
      'No tasks to show'}
    </div>
  );
}

export default App;
