

import React from 'react'

export default function AuthStatus({ user, onLogout }) {
if (!user) return null
return (
<div className="auth-status">
<p>Welcome, <strong>{user.username}</strong>!</p>
<button className="btn" onClick={onLogout}>Logout</button>
</div>
)
}