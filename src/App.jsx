import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import AuthStatus from './components/AuthStatus'

export default function App() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const authenticate = ({ username, password }) => {
    setError('')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'password') {
          resolve({ username })
        } else {
          reject(new Error('Invalid username or password'))
        }
      }, 500)
    })
  }

  const handleLogin = async (credentials) => {
    try {
      const userData = await authenticate(credentials)
      setUser(userData)
    } catch (err) {
      setError(err.message)
      setUser(null)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setError('')
  }

  return (
    <div className="app-container">
      <h1>Log in</h1>

      <LoginForm onLogin={handleLogin} errorMessage={error} />
      <AuthStatus user={user} onLogout={handleLogout} />

      <footer className="footer">
          username: <code>admin</code> and password: <code>password</code>
      </footer>
    </div>
  )
}
