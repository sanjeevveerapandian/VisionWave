import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/resources')
            .then(response => setResources(response.data))
            .catch(error => console.error('Error fetching resources:', error));
    }, []);

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#47cd8a',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Available Resources</h2>
            <ul style={{
                listStyle: 'none',
                padding: 0
            }}>
                {resources.map(resource => (
                    <li key={resource._id} style={{
                        backgroundColor: '#47cd8a',
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>
                        <strong>{resource.name}</strong> - {resource.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
