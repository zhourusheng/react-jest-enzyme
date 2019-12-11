import React from 'react'
import { Button } from 'antd'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.handleTest2 = this.handleTest2.bind(this)
  }

  componentDidMount() {
    console.log('didMount')
  }

  handleTest() {
    console.log('test')
  }

  handleTest2() {
    console.log('test2')
  }

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