import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Mock = require('mockjs')

Mock.mock('https://www.test.com', {
  'hits|4': [
    {
      'objectID|+1': 1,
      'title': '@ctitle',
      'url': '@curl'
    }
  ]
})

function EffectPage() {
  const [data, setData] = useState({ hits: [] })

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios('https://www.test.com')
      console.log(data)
      setData(data)
    }
    fetchData()
  }, [])

  /**
   * useEffect 第二个参数可以用于定义依赖的所有变量。如果期中一个变量发生变化，则useEffect会再次运行
   * 如果包含变量的数组为空, 则在更新组件时，useEffect 不会再执行，因为他监听不到任何变化
   * */

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default EffectPage
