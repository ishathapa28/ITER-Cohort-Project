import { Routes, Route } from 'react-router-dom'

import ProtectedRoute from './components/common/ProtectedRoute'

import Landing from './pages/Landing/Landing'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'

import AppLayout from './components/layout/AppLayout'

import Dashboard from './pages/Dashboard/Dashboard'
import Practice from './pages/Practice/Practice'
import Problem from './pages/Problem/Problem'
import Progress from './pages/Progress/Progress'
import Bookmarks from './pages/Bookmarks/Bookmarks'
import Roadmap from './pages/Roadmap/Roadmap'
import A2Z from './pages/A2Z/A2Z'
import Profile from './pages/Profile/Profile'
import Settings from './pages/Settings/Settings'
import AICoach from './pages/AICoach/AICoach'
import InterviewPrep from './pages/InterviewPrep/InterviewPrep'

function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />


      {/* PROTECTED ROUTES */}

      <Route element={<ProtectedRoute />}>

        {/* MAIN APPLICATION LAYOUT */}

        <Route element={<AppLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/practice" element={<Practice />} />

          <Route path="/problem/:id" element={<Problem />} />

          <Route path="/roadmap" element={<Roadmap />} />

          <Route path="/mcq" element={<div>MCQ</div>} />

          <Route path="/interview" element={<InterviewPrep />} />

          <Route path="/progress" element={<Progress />} />

          <Route path="/bookmarks" element={<Bookmarks />} />

          <Route path="/a2z" element={<A2Z />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/ai-coach" element={<AICoach />} />

        </Route>

      </Route>

    </Routes>
  )
}

export default App