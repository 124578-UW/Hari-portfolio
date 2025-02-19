import React, { useState, useEffect } from 'react';
import ProfessionalSummary from './components/Professional Summary';  
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VolunteerAndExtraCurricular from './components/Volunteer and extra curricular';
import './styles/App.css';
import myPicture from './assets/Mypicture.jpeg'; // Make sure to place the image in the correct path

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Use useEffect to add/remove the dark-mode class on the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <div className="header">
        <div className="image">
          <img src={myPicture} alt="Hari haran Suresh kumar" style={{ width: '650px', marginTop: '10px' }}/>
        </div>
        <div className="text" >
          <h1><em>Hello, I am Hari haran Suresh kumar, and I am an aspiring Data Scientist</em></h1>
          <a href="https://www.linkedin.com/in/hariharan-sureshkumar-4994a2254/" target="_blank" rel="noopener noreferrer">
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
      <ProfessionalSummary />
      <Experience />
      <Skills />
      <Projects />
      <VolunteerAndExtraCurricular />
    </div>
  );
}

export default App;
