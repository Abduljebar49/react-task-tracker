import PropTypes from 'prop-types'
import React from 'react'

const Button = ({color,text, onShowAddTask}) => {
    // const onClick =() =>{
    //     onShowAddTask
    // }

    return (
            <button
            onClick={onShowAddTask} 
            style={{backgroundColor:color}} 
            className="btn">
                {text}
            </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.prototype ={
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button
