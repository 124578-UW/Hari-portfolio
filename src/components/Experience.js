import React from 'react';
// import cognizant from '../assets/Cognizant.jpeg';
import Mepz from '../assets/Mepz office.jpeg';



const Experience = () => {
    const experiences = [
        {
            title: 'Programmer Analyst',
            company: 'Cognizant Technology Solutions',
            duration: 'July 2022 - March 2024',
            description: `KYT (Know your team) Project
- Led exploratory data analysis (EDA) and data cleaning, ensuring the integrity of employee hierarchy data before migration.
- Optimized ETL processes by coordinating with data engineers, improving data accuracy and efficiency.
- Managed and updated relational databases (SQL, PostgreSQL), ensuring system-wide data consistency.
- Authored comprehensive documentation on database structures, data flows, and schema relationships to support future scalability. 
- Enhanced user experience (UX) by identifying and resolving front-end issues in React.js, improving application usability.
Wise stack Project
- Designed and executed test cases to improve code coverage and validate feature functionality.
- Developed and deployed backend updates while troubleshooting system-level issues to enhance application performance.
- Acted as a key liaison between cross-functional teams and clients, including daily collaboration with a US bank, to align project deliverables with stakeholder expectations.
- Mentored junior team members and interns, providing guidance on tasks, debugging issues, and improving their understanding of project workflows.`
        },
        {
            title: 'Programmer Analyst Trainee',
            company: 'Cognizant Technology Solutions',
            duration: 'January 2022 - June 2022',
            description: `- Built a Claims Management Application using Java, React.js, and microservices to streamline claim tracking and processing.
- Strengthened technical proficiency through Cognizant’s Digital Nurture Program, completing hands-on assessments across data analysis and full-stack development.
- Participated in cohort-based training to improve development skills, communication, and teamwork in an agile environment.
- Earned Microsoft Azure Fundamentals (AZ-900) certification, gaining foundational knowledge of cloud computing and Microsoft Azure services.`
        },
    ];

    return (
        <div className="experience">
            <h2>Experience</h2>
        
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3><em>{exp.title}</em></h3>
                        <p>{exp.company}</p>
                        <p>{exp.duration}</p>
                        <ul>
                            {exp.description.split('\n').map((desc, i) => {
                                if (desc.startsWith('KYT') || desc.startsWith('Wise stack')) {
                                    return <p key={i}><strong>{desc}</strong></p>;
                                }
                                return <li key={i}>{desc.replace('-', '').trim()}</li>;
                            })}
                        </ul>
                    </li>
                ))}
            </ul>
            {/* Display the image only once at the end */}
            {/* <img src={cognizant} alt="Cognizant Technology Solutions" style={{ width: '150px', marginTop: '10px' }} /> */}
            <img src={Mepz} alt="Cognizant Technology Solutions" style={{ width: '350px', marginTop: '10px'}} />
        </div>
    );
};

export default Experience;
