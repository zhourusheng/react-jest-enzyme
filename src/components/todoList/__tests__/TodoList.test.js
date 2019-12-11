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


// 测试组件生命周期

// 使用spy替身时, 再测试用例结束后，要对spy进行 restore
// 否则这个 spy 会一直存在，并且无法对相同的方法再次进行 spy
it('calls componentDidMount', () => {
  // 使用spyOn来mock 组件声明周期, 替身函数要在组件渲染之前，所有替身函数要定义在setup执行之前
  const componentDidMountSpy = jest.spyOn(TodoList.prototype, 'componentDidMount')
  const { wrapper } = setup()
  expect(componentDidMountSpy).toHaveBeenCalled()
  componentDidMountSpy.mockRestore()
});


// 测试组件内部函数

// 使用 instance 函数来取得组件的实例，并用spyOn方法来 mock实例上的内部方法
// 然后用这个实例去调用那个内部方法，就可以用替身来判断这个内部函数是否被调用

it('calls component handleTest', () => {  // class 中使用箭头函数定义的方法
  const { wrapper } = setup()
  const spyFunction = jest.spyOn(wrapper.instance(), 'handleTest')
  wrapper.instance().handleTest()
  expect(spyFunction).toHaveBeenCalled()
  spyFunction.mockRestore()
});

// 内部方法使用箭头函数定义时, 需要对实例 instance() 进行 mock
// 如果内部方法通过正常方式 或者 bind() ,则需要使用 prototype 进行mock

it('calls component handleTest2', () => {  // 在constructor使用bind 来定义的方法
  const spyFunction = jest.spyOn(TodoList.prototype, 'handleTest2')
  const { wrapper } = setup()
  wrapper.instance().handleTest2()
  expect(spyFunction).toHaveBeenCalled()
  spyFunction.mockRestore()
});