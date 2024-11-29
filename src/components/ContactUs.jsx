import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // To handle loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set loading state to true

        try {
            const response = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID, // Using environment variable
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Using environment variable
                e.target, // The form itself
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Using environment variable
            );

            if (response.status === 200) {
                alert('Message sent successfully!');
                setFormData({ name: "", email: "", message: "" }); // Reset form
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false); // Reset loading state
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block mb-2 text-n-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-lg border border-n-1/10"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-n-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-lg border border-n-1/10"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="message" className="block mb-2 text-n-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 rounded-lg border border-n-1/10"
                    placeholder="Your Message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-n-6 text-white py-3 rounded-lg"
                disabled={isSubmitting} // Disable when submitting
            >
                {isSubmitting ? "Sending..." : "Send Message"} {/* Show loading text */}
            </button>
        </form>
    );
};

export default ContactUs;
