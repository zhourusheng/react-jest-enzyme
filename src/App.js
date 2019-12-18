import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

import UseMemo from '@/components/UseMemo'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UseMemo />
      </div>
    </Provider>
  )
}

export default App
