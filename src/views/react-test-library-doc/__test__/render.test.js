import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Hello from '..'

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

it('render with props or without props', () => {
  act(() => {
    render(<Hello />, container)
  })
  expect(container.textContent).toBe('嘿,陌生人')

  act(() => {
    render(<Hello name='张三李四' />, container)
  })
  expect(container.textContent).toBe('你好,张三李四!')
})
