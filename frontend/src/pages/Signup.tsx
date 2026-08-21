import { useState } from 'react'
import { Link } from 'react-router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signup attempt:', { email, password })
  
  }

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-6">
      <div className="w-full max-w-xs">
        <div className="font-display italic text-center text-3xl text-ink mb-7">
          Flowstate
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-surface border border-mist rounded-card p-6"
        >
          <h1 className="text-ink font-medium mb-4">Create your account</h1>

          <label className="block mb-5">
            <span className="text-xs text-muted mb-1.5 block">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-mist rounded-[10px] px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </label>

          <label className="block mb-6">
            <span className="text-xs text-muted mb-1.5 block">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full border border-mist rounded-[10px] px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-accent text-surface rounded-[10px] py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Sign up
          </button>

          <p className="text-center text-xs text-muted mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-accent font-medium">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}