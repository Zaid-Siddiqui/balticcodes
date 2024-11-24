import Section from "./Section";
import Heading from "./Heading";
//import { contactImage } from "../assets"; // Assuming you have a contact image or background image for this section

const ContactUs = () => {
    return (
        <Section id="contact-us">
            <div className="container">
                <Heading
                    title="Get in Touch with Us"
                    text="We&apos;d love to hear from you. Reach out and let&apos;s talk!"
                />

                <div className="relative grid gap-5 lg:grid-cols-2">
                    {/* Left Section: Contact Form */}
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden bg-n-7 p-8">
                        <h4 className="h4 mb-4">Contact Form</h4>
                        <p className="body-2 mb-4 text-n-3">Fill out the form below, and we&apos;ll get back to you shortly!</p>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-n-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 rounded-lg border border-n-1/10"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-n-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 rounded-lg border border-n-1/10"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-n-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full p-3 rounded-lg border border-n-1/10"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-n-6 text-white py-3 rounded-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Section: Image or Background */}
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">

                        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-gradient-to-b from-n-8/0 to-n-8/90">
                            <h4 className="h4 text-white mb-4">We Are Here to Help</h4>
                            <p className="body-2 text-white text-center">
                                Have questions? Our team is just a message away. We&apos;re happy to assist with anything.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ContactUs;
