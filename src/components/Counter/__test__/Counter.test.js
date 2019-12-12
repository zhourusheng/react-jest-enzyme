import React from 'react'
import { mount } from 'enzyme'
import Counter from '..'

describe('UI test Counter', () => {
  // defaultProps测试
  it('should have title', () => {
    const wrapper = mount(<Counter />)
    const title = wrapper.find('h1')
    expect(title).toHaveLength(1)
    expect(title.text()).toBe('This is a Counter')
  })

  // 点击测试
  it('should add 1 when click button', () => {
    const wrapper = mount(<Counter />)
    const counter = wrapper.find('.counter')
    const value1 = parseInt(counter.text())
    wrapper.find('button').simulate('click')
    const value2 = parseInt(counter.text())
    expect(value2).toBe(value1 + 1)
  })

  // 输入测试
  it('should change when input number', () => {
    const wrapper = mount(<Counter />)
    const counter = wrapper.find('.counter')
    wrapper.find('input').simulate('change', {
      target: {
        value: 5
      }
    })
    expect(counter.text()).toBe('5')
  })

  // props传值和生命周期测试
  it('should change when props change', () => {
    const wrapper = mount(<Counter title="demo" value={5} />)
    const componentDidMountSpy = jest.spyOn(Counter.prototype, 'componentWillReceiveProps')
    const title = wrapper.find('h1')
    wrapper.setProps({
      title: 'Demo2'
    })
    expect(componentDidMountSpy).toHaveBeenCalled()
    expect(title.text()).toBe('Demo2')
  })
})