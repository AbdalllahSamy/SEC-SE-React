import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../components/layout/Navbar';
import Card from '../../../components/layout/Card';
import FormButton from '../../../components/layout/FormButton';
import EventCard from '../../../components/layout/EventCard';

function Events() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const auth = JSON.parse(sessionStorage.getItem("auth"));
                if (!auth || !auth.token) {
                    throw new Error('Authentication token not found');
                }

                const response = await axios.get('/api/show/event', {
                    headers: {
                        'Authorization': `Bearer ${auth.token}`
                    },
                    withCredentials: true
                });
                
                // Convert timestamps to normal date format
                const updatedEvents = response.data.map(event => ({
                    ...event,
                    date: new Date(event.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric'
                    }),
                }));
                
                setEvents(updatedEvents);
            } catch (error) {
                console.error('Failed to fetch events:', error);
                setError('Failed to fetch events. Please try again later.');
            }
        };

        fetchData();

        return () => {
            // Cleanup function
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className='event-header'>
                <h1 className='m-4'>events</h1>
                <div className=" ">
                    <FormButton title="add" stl="add-btn" />
                </div>
            </div>

            <div className="all-cards row flex-column align-items-center gap-5">
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {events.map((event, index) => (
                        <div className="col" key={index}>
                            <EventCard
                                date={event.date}
                                content={event.content}
                                type={event.type}
                                publisher_id={event.publisher_id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Events;
