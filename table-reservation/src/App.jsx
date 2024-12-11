import { useState } from 'react'
import Resteurant from './components/Resteurant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Resteurant />
    </>
  )
}

export default App
