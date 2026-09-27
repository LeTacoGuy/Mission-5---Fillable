import './App.css'
import NavBar from "./components/navbar"
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </main>
    </div>
  )
}



export default App
