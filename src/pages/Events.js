import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events/')
            .then(response => setEvents(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <ul className="mt-4 space-y-4">
                {events.map(event => (
                    <li key={event.id} className="p-4 border rounded">
                        <h3 className="font-bold">{event.title}</h3>
                        <p>{event.description}</p>
                        <span>{event.date} - {event.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
