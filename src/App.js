import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

import Counter from '@/components/Counter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  )
}

export default App
