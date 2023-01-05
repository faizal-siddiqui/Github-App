import { useState } from 'react'
import AllRoutes from './components/Routes/AllRoutes'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App
