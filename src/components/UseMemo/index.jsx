
import React, { useState, useMemo } from 'react'

const Button = ({ name, children }) => {
  const changeName = (name) => {
    console.log('触发了 changeName')
    return `${name}已经被改变`
  }
  const changeContent = (content) => {
    console.log('触发了 changeContent')
    return `${content}已经被改变`
  }

  const otherName = useMemo(() => changeName(name), [name])
  const otherContent = useMemo(() => changeContent(children), [children])

  return (
    <>
      <div>{otherName}</div>
      <div>{otherContent}</div>
    </>
  )
}

const UseMemoPage = () => {
  const [name, setName] = useState('name')
  const [content, setContent] = useState('content')

  return(
    <>
      <button onClick={() => setName(new Date().getTime())}>setName</button>
      <button onClick={() => setContent(new Date().getTime())}>setContent</button>
      <Button name={name}>{content}</Button>
    </>
  )
}

export default UseMemoPage