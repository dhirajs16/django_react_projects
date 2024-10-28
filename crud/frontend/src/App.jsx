import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Create from "./components/pages/Create"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  )
}

export default App