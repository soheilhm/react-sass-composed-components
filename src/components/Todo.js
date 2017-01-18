import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li style={{margin:50, padding:50}}
    onClick={onClick}
    style={{
      backgroundColor: completed ? '#65a852' : '#a88b52'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
