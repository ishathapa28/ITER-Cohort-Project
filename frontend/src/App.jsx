import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'

import AppLayout from './components/layout/AppLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Practice from './pages/Practice/Practice'
import Problem from './pages/Problem/Problem'

function App() {
  return (
      <Routes>

        {/* Public */}
        <Route path="/" element={<Landing />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main application */}
        <Route element={<AppLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/practice" element={<Practice />}/>

          <Route path="/ai-coach" element={<div>AI Coach</div>} />

          <Route path="/roadmap" element={<div>Roadmap</div>}/>

          <Route path="/mcq" element={<div>MCQ</div>}/>

          <Route path="/interview" element={<div>Interview Prep</div>}/>

          <Route path="/progress" element={<div>Progress</div>} />

          <Route path="/bookmarks" element={<div>Bookmarks</div>} />

          <Route path="/problem/:id" element={<Problem />} />

          <Route path="/settings" element={<div>Settings</div>}/>

        </Route>

      </Routes>
  )
}

export default App