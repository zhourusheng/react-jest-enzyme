import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, render, mount } from 'enzyme'
import TodoList from '..'


// setup设置
const props = {
  list: ['first', 'secord'],
  deleteTodo: jest.fn()
}

const setup = () => {
  const wrapper = shallow(<TodoList {...props} />)
  return {
    props,
    wrapper
  }
}

const setupByRender = () => {
  const wrapper = render(<TodoList {...props} />)
  return {
    props,
    wrapper
  }
}

const setupByMount = () => {
  const wrapper = mount(<TodoList {...props} />)
  return {
    props,
    wrapper
  }
}

// 使用 snapshot 进行UI测试
it('render current', () => {
  const tree = renderer.create(<TodoList {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
});


// 对组件节点进行测试
it('should has Button', () => {
  const { wrapper } = setup()
  expect(wrapper.find('Button').length).toBe(2)
});

it('should render 2 item', () => {
  const { wrapper } = setupByRender()
  expect(wrapper.find('button').length).toBe(2)
});

it('should render item equal', () => {
  const { wrapper } = setupByMount()
  wrapper.find('.item-text').forEach((node, index) => {
    expect(node.text()).toBe(wrapper.props().list[index])
  })
});

it('click item to be done', () => {
  const { wrapper } = setupByMount()
  wrapper.find('Button').at(0).simulate('click')
  expect(props.deleteTodo).toBeCalled()
});