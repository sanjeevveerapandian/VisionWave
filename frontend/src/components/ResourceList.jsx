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
        <div>
            <h2>Available Resources</h2>
            <ul>
                {resources.map(resource => (
                    <li key={resource._id}>{resource.name} - {resource.type}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
