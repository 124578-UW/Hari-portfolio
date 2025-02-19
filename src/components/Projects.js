import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Pharmacy Management System',
            description: 'The Pharmacy Management System employs CRUD operations for efficient data management, enabling easy addition, retrieval, updates, and deletion of medication and patient records.',
            technologies: 'Technologies used: Database Management System, SQL, HTML, CSS, JavaScript'
        },
        {
            title: 'Smart Irrigation System Using IOT',
            description: 'The project leverages IOT to conserve water in irrigation by employing sensors to measure moisture levels. The system precisely halts irrigation when threshold is reached, ensuring optimal water usage',
            technologies: 'Technologies used: Python, IOT, Sensors'
        },
        {
            title: 'Wheat Leaf disease recognition System',
            description: 'The Wheat Leaf Disease Recognition project utilizes deep learning concepts, Tensor Flow, and Keras to train a model for identifying crop diseases. By analysing data, the model can accurately recognize and classify affected wheat crops, aiding in early detection and management of plant diseases.',
            technologies: 'Technologies used: Python, Tensor Flow, Keras, Deep learning.'
        },
        {
            title: 'Seattle Traffic Accident Analysis',
            description: 'The Seattle Traffic Accident Analysis project employs data analysis and visualization techniques to identify trends and patterns in traffic accidents. By analyzing data, the project aims to identify high-risk areas and factors contributing to accidents, enabling stakeholders to implement targeted interventions for accident prevention.',
            technologies: 'Technologies used: Python, Pandas, Matplotlib, Seaborn, Data Analysis.'
        },
        {
            title: 'Quizzatron',
            description: 'An AI-powered quizzing system that can generate questions on any topic - SATs, movies, national flags, or whatever you choose! The application supports custom inputs like PDFs or images and can also generate quizzes autonomously using DeepSeek. It provides an engaging learning experience with minimal human input.',
            technologies: 'Technologies used: Python, Flask, Git, Data Analysis.'
        }
    ];

    return (
        <div className="academic-projects">
            <h2>Academic Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3><em>{project.title}</em></h3>
                        <p>{project.description}</p>
                        <p>{project.technologies}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;