import React, { useState } from "react";
import "./App.css";
import jsPDF from "jspdf";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    school: "",
    previousJobs: "",
    age: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(20);
    doc.text("Resume", 105, 20, null, null, "center");
    doc.setFontSize(14);
    doc.text(`Name: ${formData.name}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Phone: ${formData.phone}`, 20, 60);
    doc.text(`Address: ${formData.address}`, 20, 70);
    doc.text(`Years of Experience: ${formData.experience}`, 20, 80);
    doc.text(`School: ${formData.school}`, 20, 90);
    doc.text(`Previous Jobs/Workplace: ${formData.previousJobs}`, 20, 100);
    doc.text(`Age: ${formData.age}`, 20, 110);
    doc.save("resume.pdf");
  };

  return (
    <div className="frame1">
      {/* Header */}
      <div className="tab">
        <div className="frame2">
          <h1 className="title">BUILD YOUR RESUME IN MINUTES</h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="main">
        <h2>Personal Information</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />

          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />

          <label>Years of Experience:</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} />

          <label>School Graduated From:</label>
          <input type="text" name="school" value={formData.school} onChange={handleChange} />

          <label>Previous Jobs/Workplace:</label>
          <input type="text" name="previousJobs" value={formData.previousJobs} onChange={handleChange} />

          <label>Age:</label>
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </form>
      </div>

      {/* Get Started Button */}
      <div className="get-started-button" onClick={generatePDF}>
        <p className="get-started-text">Download Resume</p>
      </div>
    </div>
  );
}

export default App;
