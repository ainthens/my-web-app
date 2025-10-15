import React from 'react'

export default function InputField({ label, type = 'text', name, value, onChange, placeholder }) {
return (
<label className="input-field">
<span className="label-text">{label}</span>
<input
type={type}
name={name}
value={value}
onChange={onChange}
placeholder={placeholder}
autoComplete="off"
/>
</label>
)
}