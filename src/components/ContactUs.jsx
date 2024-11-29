import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [emailSent, setEmailSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, // Vite uses 'import.meta.env' for env variables
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (response.status === 200) {
                setEmailSent(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                throw new Error("Failed to send message.");
            }
        } catch (err) {
            console.error("Error sending email:", err);
            setError("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
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
                <label htmlFor="phone" className="block mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 rounded-lg border"
                    placeholder="Your Phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 rounded-lg border"
                    placeholder="Subject"
                    required
                    value={formData.subject}
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
            {emailSent && <p className="text-green-500">Message sent successfully!</p>}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
};

export default ContactUs;
