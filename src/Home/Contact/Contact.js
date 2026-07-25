import "./Contact.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

function Contact(){
    const [form, setForm] = useState({ name: "", email: "", purpose: "general", message: "" });
    const [status, setStatus] = useState({ type: "idle", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (status.type !== "idle") {
            setStatus({ type: "idle", message: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_PUBLIC_KEY) {
            setStatus({
                type: "error",
                message: "Email is not configured yet. Set the EmailJS keys in your environment to enable sending.",
            });
            return;
        }

        setStatus({ type: "loading", message: "Sending message..." });

        try {
            await emailjs.send(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    purpose: form.purpose,
                    message: form.message,
                    to_email: "dwijshah2257@outlook.com",
                },
                {
                    publicKey: EMAIL_PUBLIC_KEY,
                }
            );

            setStatus({ type: "success", message: "Message sent. I’ll get back to you soon." });
            setForm({ name: "", email: "", purpose: "general", message: "" });
        } catch (error) {
            console.error("Failed to send contact form email:", error);
            setStatus({
                type: "error",
                message: "Sorry, something went wrong while sending your message. Please try again.",
            });
        }
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
                    <button type="submit" className="submit-btn" disabled={status.type === "loading"}>
                        {status.type === "loading" ? "Sending..." : "Send"}
                    </button>
                    {status.message ? (
                        <p className={`contact-status contact-status--${status.type}`} role="status" aria-live="polite">
                            {status.message}
                        </p>
                    ) : null}
                </form>
            </div>
        </div>
    );
}

export default Contact;