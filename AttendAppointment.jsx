import React from 'react'

export default function AttendAppointment ({ mode, link }) {
  return (
    <div className='bg-white shadow-md rounded p-6 text-center'>
      <h2 className='text-xl font-semibold mb-4'>Appointment Mode</h2>

      {mode === 'online' ? (
        <>
          <p className='text-gray-700 mb-2'>
            Your appointment is scheduled online.
          </p>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline'
          >
            Join Video Call
          </a>
        </>
      ) : (
        <p className='text-gray-700'>
          Please visit the clinic at your scheduled time.
        </p>
      )}
    </div>
  )
}
