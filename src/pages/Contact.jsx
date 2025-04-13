import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_fb1dtdt", // Replace with your EmailJS Service ID
        "template_8fgcbew", // Replace with your EmailJS Template ID
        templateParams,
        "uioU-gPnd8WOIucAw" // Replace with your EmailJS User ID
      );

      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-yeelow-200 py-8 px-4">
      {/* Toast notification */}
      {toastVisible && (
        <div className="fixed top-4 right-4 bg-white p-4 rounded-md shadow-md z-50 border-l-4 border-green-500 flex items-start">
          <div>
            <h4 className="font-medium text-gray-800">Message sent!</h4>
            <p className="text-gray-600 text-sm">We'll get back to you as soon as possible.</p>
          </div>
          <button 
            className="ml-4 text-gray-400 hover:text-gray-600" 
            onClick={() => setToastVisible(false)}
          >
            ×
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions or want to get in touch? We'd love to hear from you.
            Fill out the form below and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-5 bg-white p-8 rounded-xl shadow-sm flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="flex gap-4 items-start">
              <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-600">
                  123 Business Avenue<br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Email Address</h3>
                <p className="text-gray-600">hello@yourcompany.com</p>
                <p className="text-gray-600">support@yourcompany.com</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Phone className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Phone Number</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri, 9am-6pm PST</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-800 mb-3">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-400 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-400 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-400 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-400 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full border border-gray-300 rounded-md p-3 text-base focus:border-blue-400 focus:ring focus:ring-blue-100 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border border-gray-300 rounded-md p-3 text-base focus:border-blue-400 focus:ring focus:ring-blue-100 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-base focus:border-blue-400 focus:ring focus:ring-blue-100 focus:outline-none"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your question or inquiry in detail..."
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-base focus:border-blue-400 focus:ring focus:ring-blue-100 min-h-[150px] resize-y focus:outline-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-blue-400 hover:bg-blue-500 text-white transition-colors px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send size={18} />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;