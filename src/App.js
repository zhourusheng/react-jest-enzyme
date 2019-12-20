import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

// import UseMemo from '@/components/UseMemo'
import EffectPage from '@/components/useEffect'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UseMemo /> */}
        <EffectPage />
      </div>
    </Provider>
  )
}

export default App
