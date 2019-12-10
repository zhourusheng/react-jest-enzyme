import React from 'react'
import './App.css'

import Link from '@/components/link'
import CheckboxWithLabel from '@/components/CheckboxWithLabel'

function App() {
  return (
    <div className="App">
      <Link>
        百度
      </Link>
      <CheckboxWithLabel labelOn="打开" labelOff="关闭" />
    </div>
  )
}

export default App
