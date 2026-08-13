import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight
} from 'lucide-react'

import AuthLayout from '../../components/common/AuthLayout'
import SocialAuth from '../../components/common/SocialAuth'
import AuthDivider from '../../components/common/AuthDivider'

function Login() {

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Login:', formData)

    // Firebase authentication will be connected later.
  }

  return (
    <AuthLayout>

      {/* Heading */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back
        </h2>

        <p className="mt-2 text-slate-500">
          Continue your DSA learning journey.
        </p>

      </div>

      <SocialAuth
        onGoogle={() => console.log('Google login')}
        onGithub={() => console.log('GitHub login')}
      />

      <AuthDivider />

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Email */}
        <div>

          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="
                w-full
                h-12
                rounded-xl
                border border-slate-200
                bg-white
                pl-11 pr-4
                text-sm
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
              "
            />

          </div>

        </div>

        {/* Password */}
        <div>

          <div className="flex items-center justify-between mb-2">

            <label className="text-sm font-medium">
              Password
            </label>

            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </button>

          </div>

          <div className="relative">

            <Lock
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="
                w-full
                h-12
                rounded-xl
                border border-slate-200
                bg-white
                pl-11 pr-11
                text-sm
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                right-3.5
                top-1/2
                -translate-y-1/2
                text-slate-400
                hover:text-slate-600
                transition
              "
            >
              {showPassword
                ? <EyeOff size={18} />
                : <Eye size={18} />
              }
            </button>

          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full
            h-12
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition
            shadow-sm
            hover:shadow-md
          "
        >
          Sign In
          <ArrowRight size={18} />
        </button>

      </form>

      {/* Signup */}
      <p className="mt-7 text-center text-sm text-slate-500">

        Don't have an account?{' '}

        <Link
          to="/signup"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Create one
        </Link>

      </p>

    </AuthLayout>
  )
}

export default Login