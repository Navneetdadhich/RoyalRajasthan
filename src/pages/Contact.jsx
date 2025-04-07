import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us - रंग रंगीला राजस्थान (Rang Rangeela Rajasthan)
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
          Get in touch with us for any inquiries, feedback, or support.
          Experience the vibrant culture of Rajasthan with our services.
        </p>
      </div>

      {/* Contact Information */}
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Email Us
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              <a href="mailto:support@example.com">support@example.com</a>
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Call Us
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              +91-XXX-XXX-XXXX
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Visit Us
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Jaipur, Rajasthan, India
            </dd>
          </div>
        </dl>
      </div>

      {/* Contact Form */}
      <div className="mt-12">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your Message"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
          >
            Send Message
          </button>
        </div>
      </div>

       {/* Rajasthani Cultural Theme Elements (Example) */}
       <div className="mt-8 text-center">
          <p className="text-gray-600">
           Experience the warmth and hospitality of Rajasthan.
          </p>
       </div>
    </div>
  );
};

export default Contact;