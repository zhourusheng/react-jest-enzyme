# Jest 文档学习

## global API
  1. `describe(name, fn)`: 描述块, 将一组功能相关的测试用例组合在一起
  2. `it(name, fn, timeout)`: 别名test, 用来放测试用例
  3. `afterAll(fn, timeout)`: 所有测试用例跑完之后执行的方法
  4. `beforeAll(fn, timeout)`: 所有测试用例执行之前执行的方法
  5. `afterEach(fn)`: 在每个测试用例执行完之后执行的方法
  6. `beforeEach(fn):`: 在每个测试用例执行之前执行的方法

  `全局` 和 `describe` 都可以有上面四个周期函数，`describe` 的 `after` 函数优先级要高于 `全局` 的 `after` 函数，
  `describe`  的  `before`  函数优先级要低于 `全局` 的 `before` 函数

  每执行一个测试用例, 就会有一对 `afterEach` 和 `beforeEach`, 全局或者局部的

  而全局 `afterAll` 和 `beforeAll` 只执行一次
  

## config


## 常用断言
  1. `expect(value)`: 要测试一个进行断言时, 要使用 `expect` 对值进行包裹
  2. `toBe(value)`: 使用 `Object.is()` 来进行比较, 如果进行浮点数的比较，则要使用 `toBeCloseTo()`
  3. `not`: 用于取反
  4. `toEqual(value)`: 用于对象深比较
  5. `toMatch(regExpOrString)`: 用来检查字符串是否匹配，可以是正则表达式或者字符串
  6. `toContain(item)`: 用来判断 `item` 是否在一个数组中，也可以用于字符串判断
  7. `toBeNull(value)`: 只匹配 `null`
  8. `toBeUndefined(value)`: 只匹配 `undefined`
  9. `toBeDefined(value)`: 与 `toBeUndefined()` 相反
  10. `toBeTruthy(value)`: 匹配任何使 `if语句` 为真的值
  11. `toBeFalsy(value)`: 匹配任何使 `if语句` 为假的值


# Enzyme 文档学习

## 三种渲染方法

1. `shallow`: 浅渲染，是对官方的 Shallow Renderer 的封装。将组件渲染成虚拟的 DOM对象，只会渲染第一层，子组件将不会被渲染出来，使得效率非常高。不需要DOM环境，并可以使用 Jquery 的方式访问组件信息。
2. `render`: 静态渲染，他将React 组件渲染成静态的 HTML 字符串，然后使用 Cheerio 这个库解析这段字符串，并返回一个 Cheerio的实例对象，可以用来分析组件的 HTML结构。
3. `mount`: 完全渲染，他将组件渲染加载成一个真实的 DOM节点，用来测试 DOM API的交互和组件的生命周期。用到了jsdom 来模拟浏览器环境。


## 常用方法

1. `simulate(event, mock)`: 模拟事件，用来触发事件，event 为事件名，mock 为一个event object
2. `instance()`: 返回组件的实例
3. `find(selector)`: 根据选择器查找节点，selector 可以是css 中的选择器，或者是组件的构造函数，组件的display name等
4. `at(index)`: 返回渲染过的对象
5. `get(index)`: 返回一个 react node，要测试它，需要重新渲染
6. `contains(nodeOrNodes)`: 当前对象是否包含参数终点 node，参数类型为react 对象 或对象数组


<!-- https://juejin.im/post/5b6c39bde51d45195c079d62 -->