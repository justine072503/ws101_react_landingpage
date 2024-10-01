import React from 'react';
import './styles.css';
import Form from './Form';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h1>Web Development</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Importance</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h2>What is Web Development?</h2>
          <p>Web development refers to the process 
            of creating and maintaining websites and web applications 
            that are accessible through the internet or an intranet. 
            It involves a variety of tasks, from designing the layout 
            and user interface of a website to writing the code that makes 
            it function, managing databases, and ensuring that the site works 
            well across different devices and browsers.</p>
          <a href="#services" className="btn">Learn More</a>
        </div>
      </header>

      <section id="about" className="section about">
        <h2>About Us</h2>
        <p> Hi! I'm Justine , I'm a front-end developer 
          focused on crafting clean and user-friendly experiences.
          I am passionate about building excellent software that 
          improves the lives of those around me.</p>
      </section>

      <section id="services" className="section services">
        <h2>Importance</h2>
        <div className="services-container">
          <div className="service">
            <h3>HTML</h3>
            <p>(HyperText Markup Language) is 
              the standard language used to create 
              and design web pages.</p>
          </div>
          <div className="service">
            <h3>CSS</h3>
            <p>(Cascading Style Sheets) is 
              a stylesheet language used to 
              control the presentation of HTML documents.</p>
          </div>
          <div className="service">
            <h3>JAVASCRIPT</h3>
            <p> is a high-level, dynamic programming 
              language that is primarily used to create 
              interactive and dynamic content on websites.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <Form />
      </section>

      <footer className="footer">
        <p>&copy; ENRIQUEZ JUSTINE. Have a Nice Day Mwuahhh.</p>
      </footer>
    </div>
  );
};

export default App;

