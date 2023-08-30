import React from 'react'
import Home from './pages/home'
import Edu from './pages/edu'
import Experience from './pages/experience'
import Skill from './pages/skills'
import Project from './pages/project'
import Webd from './pages/webd'
import Datasc from './pages/datasc'
import Blockchain from './pages/blockchain'
import Miscellaneous from './pages/misc'
import Error from './pages/error'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/skills" element={<Skill />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/project/webd" element={<Webd />}/>
        <Route path="/project/datasc" element={<Datasc />}/>
        <Route path="/project/blockchain" element={<Blockchain />}/>
        <Route path="/project/misc" element={<Miscellaneous />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </>
  )
}

export default App
