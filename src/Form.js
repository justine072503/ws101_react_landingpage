import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
      alert(`Thank you for your message, ${name}!`);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="form">
      <input 
        type="text" 
        id="name" 
        placeholder="Your Name" 
        value={formData.name} 
        onChange={handleChange} 
        className="input" 
        required 
      />
      <input 
        type="email" 
        id="email" 
        placeholder="Your Email" 
        value={formData.email} 
        onChange={handleChange} 
        className="input" 
        required 
      />
      <textarea 
        id="message" 
        placeholder="Your Message" 
        value={formData.message} 
        onChange={handleChange} 
        className="textarea" 
        required 
      ></textarea>
      <button type="submit" className="button">Send Message</button>
    </form>
  );
};

export default Form;
