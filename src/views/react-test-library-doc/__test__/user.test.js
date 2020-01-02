import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import User from '../user'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('mock user data', async () => {
  const fakeData = {
    name: 'Joni Baez',
    age: '32',
    address: '123, Charming Avenue'
  }

  jest.spyOn(global, 'fetch').mockImplementation(() => {
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  })

  // 使用异步 act 应用执行成功的 promise
  await act(async () => {
    render(<User id='123' />, container)
  })

  expect(container.querySelector('summary').textContent).toBe(fakeData.name)
  expect(container.querySelector('strong').textContent).toBe(fakeData.age)
  expect(container.textContent).toContain(fakeData.address)


  // 清理mock 确保测试完全隔离
  global.fetch.mockRestore()
})
