import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

import Link from '@/components/link'
import CheckboxWithLabel from '@/components/CheckboxWithLabel'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Link>
          百度
        </Link>
        <CheckboxWithLabel labelOn="打开" labelOff="关闭" />
      </div>
    </Provider>
  )
}

export default App
