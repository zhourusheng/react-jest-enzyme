import React from 'react'
import { Button } from 'antd'

const ButtonItem = (props) => {
  return <Button type="primary">{props.name}</Button>
}

export default ButtonItem