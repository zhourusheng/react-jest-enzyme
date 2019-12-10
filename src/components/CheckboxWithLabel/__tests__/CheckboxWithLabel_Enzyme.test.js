import React from 'react'
import { shallow } from 'enzyme'
import CheckboxWithLabel from '..'

// 使用 Enzyme shallow渲染方式 进行测试

test('CheckboxWithLabel changes the text after click ', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

  expect(checkbox.text()).toEqual('Off')

  checkbox.find('input').simulate('change')
  expect(checkbox.text()).toEqual('On')
});