import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Mock = require('mockjs')

const url = 'https://www.test.com'

Mock.setup({ timeout: 2000 })

Mock.mock(RegExp(url + '.*'), {
  'hits|4': [
    {
      'objectID|+1': 1,
      title: '@ctitle',
      url: '@url(http)'
    }
  ]
})

function EffectPage() {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!search) return
      setIsLoading(true)
      setIsError(false)
      // 使用try catch捕获异常
      try {
        const { data } = await axios(`${url}/api/search?query=${search}`)
        console.log(search, data)
        setData(data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [search])

  /**
   * useEffect 第二个参数可以用于定义依赖的所有变量。如果期中一个变量发生变化，则useEffect会再次运行
   * 如果包含变量的数组为空, 则在更新组件时，useEffect 不会再执行，因为他监听不到任何变化
   * */

  return (
    <>
      <input
        type='text'
        name='query'
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type='button' onClick={() => setSearch(query)} disabled={!query}>
        search
      </button>
      {isError && <div>something is wrong...</div>}
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default EffectPage
