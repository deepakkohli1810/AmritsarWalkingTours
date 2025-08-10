import React, { useState } from "react";
import BottomBar from "../bottomBar";
import Footer from "../Footer";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaCheck,
} from "react-icons/fa";
import Navbar from "../Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tours: [],
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const tourOptions = [
    "One Day Excursion",
    "Two Day Excursion",
    "Three Day Excursion",
    "Golden Temple Tour",
    "Jallianwala Bagh Tour",
    "Food Walk",
    "Heritage Walk",
    "Wagah Border Tour",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const tours = checked
          ? [...prev.tours, value]
          : prev.tours.filter((tour) => tour !== value);
        return { ...prev, tours };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Web3Forms integration
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "6d5d96fb-01c7-41be-bb8f-a370ec4ad4fc", // Replace with your actual access key
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            tours: formData.tours.join(", "),
            message: formData.message,
            subject:
              "New Tour Inquiry from Amritsar Walking Tours",
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          "Failed to send your message. Please try again."
        );
      }
    } catch (error) {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center px-4 py-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full border border-gray-100 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
              <FaCheck className="text-3xl text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Thank You!
            </h1>
            <p className="text-gray-600 mb-6">
              Your inquiry has been submitted successfully.
              We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-darkblue text-white rounded-lg font-medium hover:bg-darkblue/90 transition"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
       <BottomBar />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Contact Amritsar Walking Tours
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our tours? Reach out to
                us and we'll help plan your perfect Amritsar
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full">
                  <h2 className="text-xl font-bold text-gray-800 mb-5">
                    Get In Touch
                  </h2>

                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-lg mr-3 flex-shrink-0 mt-1">
                        <FaMapMarkerAlt className="text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600">
                          Amritsar, Punjab, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-lg mr-3 flex-shrink-0 mt-1">
                        <FaEnvelope className="text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info@amritsartours.com"
                          className="text-indigo-600 hover:underline"
                        >
                          info@amritsartours.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-lg mr-3 flex-shrink-0 mt-1">
                        <FaPhone className="text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">
                          Phone/WhatsApp
                        </h3>
                        <a
                          href="https://wa.me/911234567890"
                          className="text-indigo-600 hover:underline flex items-center"
                        >
                          +91 12345 67890{" "}
                          <FaWhatsapp className="ml-2 text-green-500" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="font-medium text-gray-800 mb-3">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com/amritsartours"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                      >
                        <FaInstagram className="text-gray-700 text-xl" />
                      </a>
                      <a
                        href="https://facebook.com/amritsartours"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                      >
                        <FaFacebook className="text-gray-700 text-xl" />
                      </a>
                      <a
                        href="https://youtube.com/@amritsartours"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                      >
                        <FaYoutube className="text-gray-700 text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">
                    Send Us a Message
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name{" "}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address{" "}
                          <span className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number{" "}
                          <span className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Tour Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Which tours are you interested in?{" "}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {tourOptions.map((tour, index) => (
                          <label
                            key={index}
                            className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              value={tour}
                              checked={formData.tours.includes(
                                tour
                              )}
                              onChange={handleChange}
                              className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-gray-700">
                              {tour}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message{" "}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-y"
                        placeholder="Tell us about your travel plans, group size, preferred dates, and any special requirements..."
                      ></textarea>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-darkblue text-white font-medium rounded-lg shadow-md hover:bg-darkblue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue transition disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-3">
                      By submitting this form, you agree to
                      our{" "}
                      <a
                        href="/privacy"
                        className="text-indigo-600 hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Planning Your Visit to Amritsar?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our expert guides are ready to help you
                  experience the spiritual and historical
                  wonders of Amritsar.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="/BookNow"
                    className="px-5 py-2.5 bg-darkblue text-white rounded-lg font-medium hover:bg-darkblue/90 transition"
                  >
                    View All Tours
                  </a>
                  <a
                    href="tel:+911234567890"
                    className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center"
                  >
                    <FaWhatsapp className="mr-2 text-green-500" />{" "}
                    Call/WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
      <Footer />
    </>
  );
};

export default Contact;
