export default function ConfirmAppointment ({ details, onConfirm }) {
  if (!details) return <p>No appointment details found.</p>

    const { name, age, symptoms, date, time } = details
    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
            <h2 className="teext-xl font-bold mb-4 text-center">Confirm Your Appointment</h2>
            <div className="space-y-2">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Symptoms:</strong> {symptoms}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
            </div>
            <button onClick={onConfirm} className="mt-4 w-full bg-600 text-white py-2 rounded hover:bg-blue-700">
                Confirm Appointment
            </button>
        </div>
    );
}    