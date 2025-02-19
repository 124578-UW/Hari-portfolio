import React from 'react';
import UniversityOfWashington from '../assets/Univ-of-Washington_Memorial-Way.jpg';
import library from '../assets/library.jpg';
import RajalakshmiEngineeringCollege from '../assets/REC.jpg';

const ProfessionalSummary = () => {
    return (
        <div>
            <h2>Professional Summary</h2>
            <p style={{ textAlign: 'justify' }}>
                With a Bachelor's degree in Computer Science and hands-on experience as a Programmer Analyst at Cognizant, 
                I am currently pursuing my Master’s in Data Science at the University of Washington to transition into the data science field. 
                My technical foundation in software development, combined with a passion for data-driven solutions, positions me well for a career in data science.
            </p>
            <p style={{ textAlign: 'justify' }}>
                At Cognizant, I collaborated with cross-functional teams to deliver scalable software solutions, honing my problem-solving skills. 
                I am now focused on applying these skills to data analysis, machine learning, and predictive modeling.
            </p>
            <p style={{ textAlign: 'justify' }}>
                Outside of work and academics, I am actively involved in outreach programs and inclusivity campaigns, fostering collaboration and diversity. 
                I am excited about opportunities where I can contribute to impactful data science projects and continue growing professionally in the field.
            </p>
            <h3>Education</h3>
            <p style={{ textAlign: 'justify' }}>
                <strong>University of Washington, SEA, WA</strong><br />
                Master of Science in Data Science<br />
                September 2024 - March 2026 (anticipated)<br />
                Relevant Coursework: Data Visualization for Data Scientists, Data Management, Statistical Machine Learning for Data Science
            </p>
            <img src={UniversityOfWashington} alt="University of Washington" style={{ width: '250px', marginTop: '10px' }} />
            <img src={library} alt="University of Washington Library" style={{ width: '280px', marginTop: '10px' }} />
           
            
            <p style={{ textAlign: 'justify' }}>
                <strong>Rajalakshmi Engineering College, Anna University</strong><br />
                Bachelor of Engineering in Computer Science<br />
                August 2018 - May 2022<br />
                GPA: 3.76<br />
                Relevant Coursework: Design and Analysis of Algorithms, Python Programming, Database Management Systems
            </p>
            
            <img src={RajalakshmiEngineeringCollege} alt="Rajalakshmi Engineering College" style={{ width: '250px', marginTop: '10px' }} />
            
        </div>
    );
};

export default ProfessionalSummary;