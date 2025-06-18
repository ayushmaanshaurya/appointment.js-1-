import React from 'react'
export default function SendConfirmationEmail ({ name, email, date, time }) {
  const sendEmail = () => {
    const templateParams = {
      to_name: name,
      to_email: email,
      message: `Your appointment on ${date} at ${time} is confirmed.`
    }
      .send(
        'your_service_id', 
        'your_template_id', 
        templateParams,
        'your_public_key' 
      )
      .then(
        () => {
          alert('✅ Confirmation email sent successfully!')
        },
        error => {
          console.error('❌ FAILED...', error)
          alert('Failed to send confirmation email.')
        }
      )
  }

  return (
    <button
      onClick={sendEmail}
      className='mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'
    >
      Send Confirmation Email
    </button>
  )
}
