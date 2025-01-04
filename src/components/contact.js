import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_c7092ls', // Replace with your EmailJS Service ID
                'template_g1wgjqe', // Replace with your EmailJS Template ID
                e.target, // The form element
                // 'YOUR_USER_' // Replace with your EmailJS User ID
                { publicKey: 'BCIUqiQ1Oe53bPa9a' }
            )
            .then((result) => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            })
            .catch((error) => {
                alert('Failed to send message. Please try again later.');
                console.error(error);
            });
    };

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Contact Me
                </h2>
                <p className="text-center mb-12">
                    Feel free to get in touch using the form below!
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto bg-white p-8 shadow rounded"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded p-2"
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
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded p-2"
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
