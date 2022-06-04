import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Home=()=>{
    return(
        <div>
            <h1>Home</h1>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

const Profile=()=>{
    return(
        <div>
            <h1>Profile</h1>
            <Link to="/">Home</Link>
        </div>
    )
}


const App = () => {
  return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
      </Routes>
  )
}

export default App