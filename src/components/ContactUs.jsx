import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset form
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
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
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactUs;
