import React from 'react'
import { Button } from 'antd'

class TodoList extends React.Component {

  render() {
    const { list, deleteTodo } = this.props
    return (
      <div className="todo-list">
        {
          list.map((todo, index) => (
            <div key={index}>
              <span className="item-text">{todo}</span>
              <Button onClick={deleteTodo(index)}></Button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default TodoList