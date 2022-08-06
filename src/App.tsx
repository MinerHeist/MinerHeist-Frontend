import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Navbar } from './modules/components'
import { Landing, Leaderboard, Team, Tome } from './modules/pages'

const App = () => {
  return (
    <div className="App">
      <main>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/tome" element={<Tome />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </div>
  )
}

export default App
