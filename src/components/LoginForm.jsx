import React, { useState } from 'react'
import InputField from './InputField'

// LoginForm demonstrates controlled inputs and uses props to receive a handler
// Props: onLogin (function), errorMessage (string)
export default function LoginForm({ onLogin, errorMessage }) {
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      // call the handler passed via props
      await onLogin(form)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputField
        label="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Enter username"
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      {errorMessage && <div className="error">{errorMessage}</div>}

      <button type="submit" className="btn" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  )
}
