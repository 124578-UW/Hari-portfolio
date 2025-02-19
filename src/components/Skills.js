import React from 'react';

const Skills = () => {
const skills = [
    "Data Analysis: Excel, Python, Pandas, SQL",
    "Data Visualization: PowerPoint, Python (Matplotlib, plotly), Tableau, Power BI",
    "Databases: MS SQL, PostgresSQL",
    "Software Engineering & Programming: Agile methodology, Python, Git, Confluence, JIRA, Data Structures and Algorithms",
    "Core Competencies: EDA, Product management, Project management, Storytelling, Data Management, Descriptive analytics, Inferential statistics, Consulting, Communication, Requirement gathering, sprint planning, requirements gathering, feature prioritization, stakeholder management, roadmap planning, competitive analysis"
];

    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;