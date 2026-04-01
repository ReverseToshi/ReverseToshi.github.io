import "./Contact.css";
import React, { useState } from "react";

function Contact(){
    const [form, setForm] = useState({ name: "", email: "", purpose: "general", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder: wire up to email service or backend later
        console.log("Contact form submitted:", form);
        alert("Thanks! I'll get back to you soon.");
        setForm({ name: "", email: "", purpose: "general", message: "" });
    };

    return(
        <div id="contact">
            <div id="contact-content">
                <h2>Contact me</h2>
                <form id="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="purpose">Purpose</label>
                        <select
                            id="purpose"
                            name="purpose"
                            value={form.purpose}
                            onChange={handleChange}
                        >
                            <option value="general">General</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="opportunity">Opportunity/Hiring</option>
                            <option value="question">Question</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell me more..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;