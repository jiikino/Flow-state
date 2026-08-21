import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function ProfileSetup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [school, setSchool] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Profile setup:', { firstName, lastName, school })
    navigate('/')
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
          <h1 className="text-ink font-medium mb-1">Tell us about yourself</h1>
          <p className="text-xs text-muted mb-4">One more step before you get started</p>

          <div className="flex gap-2 mb-5">
            <label className="block flex-1">
              <span className="text-xs text-muted mb-1.5 block">First name</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full border border-mist rounded-[10px] px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </label>
            <label className="block flex-1">
              <span className="text-xs text-muted mb-1.5 block">Last name</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full border border-mist rounded-[10px] px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </label>
          </div>

          <label className="block mb-6">
            <span className="text-xs text-muted mb-1.5 block">School</span>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="e.g. Rutgers University"
              className="w-full border border-mist rounded-[10px] px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-accent text-surface rounded-[10px] py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}