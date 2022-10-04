import {useState} from 'react'

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('')
    const [day, setDay]   = useState('')
    const [reminder, setReminder] = useState(false)
const onSubmit =(e)=>{
    e.preventDefault()

    if(!text){
        alert('Please add a task')
        return
    }

    onAddTask({text, day , reminder})

    setText('')
    setDay('')
    setReminder(false)

}
    return (
        <div style={{width:500}} className="container">
            <form className="form" style={{width:500}} onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Task</label>
                    <input className="form-control" type='text' placeholder='Add Task'
                        value={text}
                        onChange ={ (e)=> setText(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Day & Time</label>
                    <input className="form-control" type='text' placeholder='Add date and time'
                        value={day}
                        onChange ={ (e)=> setDay(e.target.value)}                    
                    />
                </div>
                <div className="form-group form-control-check">
                    <label>Set Reminder</label>
                    <input className="form-control " type='checkbox'
                        value={reminder}
                        checked = {reminder}
                        onChange ={ (e)=> setReminder(e.currentTarget.checked)}
                    />
                </div>
                <input className="btn btn-success btn-block" type='submit' value='Save Task'/>
            </form>
        </div>
    )
}

export default AddTask
