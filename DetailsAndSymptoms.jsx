import React, { useState } from 'react'

export default function DetailsAndSymptoms () {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [symptoms, setSymptoms] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    alert(
      `Details Submitted:\nName: ${name}\nAge: ${age}\nSymptoms: ${symptoms}`
    )
  }

  return (
    <div className='p-4 max-w-md mx-auto bg-white rounded shadow'>
      <h2 className='text-xl font-semibold mb-4'>
        Enter Your Details & Symptoms
      </h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block font-medium'>Full Name:</label>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            className='w-full p-2 border rounded'
            required
          />
        </div>

        <div>
          <label className='block font-medium'>Age:</label>
          <input
            type='number'
            value={age}
            onChange={e => setAge(e.target.value)}
            className='w-full p-2 border rounded'
            required
          />
        </div>

        <div>
          <label className='block font-medium'>
            Symptoms / Reason for Visit:
          </label>
          <textarea
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
            className='w-full p-2 border rounded'
            rows='4'
            required
          />
        </div>

        <button
          type='submit'
          className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700'
        >
          Submit Details
        </button>
      </form>
    </div>
  )
}
