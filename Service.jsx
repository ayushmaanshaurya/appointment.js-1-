import React from 'react';
export default function Service() {
    const Services = [
        { id: 1, name: 'Doctor Consultant', description: 'Book appointments with experienced doctors.' },
        { id: 2, name: 'Lab Test', description: 'Schedule your diagnostic tests online.' },
        { id: 3, name: 'Therapy Session', description: 'Connect with certified therapists.' },
    ];
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">OurServices</h2>
            <ul className="space-y-4">
                {Services.map(service => (
                    <li key={service.id} className="border rounded p-4 shadow">
                        <h3 className="text-xl font-semibold">{service.name}</h3>
                        <p className="text-grey-600">{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}