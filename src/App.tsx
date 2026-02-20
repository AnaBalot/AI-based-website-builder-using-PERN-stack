import  Home  from './pages/Home.tsx'
import Myprojects from './pages/Myprojects'
import Pricing from './pages/Pricing'
import React from 'react'
import { Routes ,Route, useLocation} from 'react-router-dom'
import Projects from './pages/Projects'
import Preview from './pages/Preview'
import Community from './pages/Community'
import  View  from './pages/View.tsx'
import Navbar from './components/Navbar.tsx'

function App() {
  const {pathname}=useLocation()
  const hideNavbar=pathname.startsWith('/projects/')&&pathname!=='/projects'||pathname.startsWith('/view/')||pathname.startsWith('/preview/')
  return (
    <div>
      {!hideNavbar && <Navbar/>}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/projects/:projectId' element={<Projects/>}/>
        <Route path='/projects' element={<Myprojects/>}/>
        <Route path='/preview/:projectId/::versionId' element={<Preview/>}/>
         <Route path='/preview/:projectId/' element={<Preview/>}/>
        <Route path='/view/:projectId' element={<View/>}/>
         <Route path='/community' element={<Community/>}/>
      </Routes>
 
    </div>
  )
}

export default App