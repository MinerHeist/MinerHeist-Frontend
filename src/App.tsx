import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './modules/components'
import { Landing, Leaderboard, Team, Tome } from './modules/pages'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tome" element={<Tome />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
