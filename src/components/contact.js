import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_c7092ls', // Replace with your EmailJS Service ID
                'template_g1wgjqe', // Replace with your EmailJS Template ID
                form.current,
                'BCIUqiQ1Oe53bPa9a' // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Your message has been sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert(
                        'Failed to send your message. Please try again later.'
                    );
                }
            );

        // Clear the form after submission
        e.target.reset();
    };

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Contact Me
                </h2>
                <p className="text-center mb-12">
                    Feel free to reach out using the form below!
                </p>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-lg mx-auto bg-white p-8 shadow rounded"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="user_name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            className="w-full border border-gray-300 rounded p-2"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="user_email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            className="w-full border border-gray-300 rounded p-2"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="w-full border border-gray-300 rounded p-2"
                            placeholder="Your Message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
