import Button from './Button'

import React from 'react'
const Header = ({title, onShowAddTask, onAdd}) => {
    return (
        <header>
            <div >
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <h1 className="float-left" style={{marginRight:0}}> {title} </h1>
                        <Button className="float-right" color={onAdd?'red':'green'} text={onAdd?'Close':'Add Task'} 
                            onShowAddTask={onShowAddTask}
                        />
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>

        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
