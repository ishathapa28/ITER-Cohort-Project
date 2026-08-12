import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Landing />} />

        {/* Authentication */}
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/signup" element={<div>Signup</div>} />

        {/* Main application */}
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/practice" element={<div>Practice</div>} />
        <Route path="/problem/:id" element={<div>Problem</div>} />
        <Route path="/roadmap" element={<div>Roadmap</div>} />
        <Route path="/mcq" element={<div>MCQ</div>} />
        <Route path="/interview" element={<div>Interview Prep</div>} />
        <Route path="/settings" element={<div>Settings</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App