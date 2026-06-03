import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>Welcome to Frontend App</h1>
        <p>Click the button to increment the count</p>
        <button onClick={() => setCount(count + 1)}>
          Count Value: {count}
        </button>
      </main>
      <Footer />
    </div>
  )
}

export default App
