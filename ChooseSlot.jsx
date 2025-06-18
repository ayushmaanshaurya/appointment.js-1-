import React, { useState } from 'react'

export default function ChooseSlot () {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM'
  ]

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Appointment set for ${selectedDate} at ${selectedTime}`)
  }

  return (
    <div className='p-4 max-w-md mx-auto bg-white rounded shadow'>
      <h2 className='text-xl font-semibold mb-4'>Choose Date & Time Slot</h2>
      <form onSubmit={handleSubmit}>
        <label className='block mb-2'>
          Select Date:
          <input
            type='date'
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            className='w-full mt-1 p-2 border rounded'
            required
          />
        </label>

        <label className='block mb-4'>
          Select Time Slot:
          <select
            value={selectedTime}
            onChange={e => setSelectedTime(e.target.value)}
            className='w-full mt-1 p-2 border rounded'
            required
          >
            <option value=''>-- Select Time --</option>
            {timeSlots.map((time, idx) => (
              <option key={idx} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>

        <button
          type='submit'
          className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'
        >
          Confirm Slot
        </button>
      </form>
    </div>
  )
}
