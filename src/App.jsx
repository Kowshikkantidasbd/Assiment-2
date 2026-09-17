import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import MovieListing from './pages/MovieListing.jsx'

export default function App() {
  return (
<<<<<<< HEAD
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
=======
    <div className="app-shell">
      <Navbar />
      <main>
>>>>>>> 533d2b33f5d12562041912882b20777c548f23b0
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieListing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
