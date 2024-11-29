import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Handle loading state
    const [error, setError] = useState(null); // To display error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set loading state to true
        setError(null); // Reset any previous error

        try {
            const response = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            if (response.status === 200) {
                alert('Message sent successfully!');
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (err) {
            console.error('Error sending email:', err);
            setError('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false); // Reset loading state
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-lg border"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-lg border"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="message" className="block mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 rounded-lg border"
                    placeholder="Your Message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <span>Sending...</span> // Optionally, replace with a spinner
                ) : (
                    "Send Message"
                )}
            </button>
        </form>
    );
};

export default ContactUs;
