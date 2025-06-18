import React from 'react'

export default function ConfirmationSent ({ email, phone }) {
  return (
    <div className='p-6 max-w-md bg-white rounded shadow text-center'>
      <h2 className='text-2xl font-bold text-green-600 mb-3'>
        ✅ Confirmation Sent
      </h2>
      <p className='text-gray-700 mb-2'>
        Your appointment has been successfully confirmed.
      </p>
      {email && (
        <p>
          📧 Email sent to: <strong>{email}</strong>
        </p>
      )}
      {phone && (
        <p>
          📱 SMS sent to: <strong>{phone}</strong>
        </p>
      )}
    </div>
  )
}
