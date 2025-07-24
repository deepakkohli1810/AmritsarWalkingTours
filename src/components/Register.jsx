// src/components/Register.js

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import BottomBar from "./bottomBar";

const Register = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const form = useRef();

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const data = localStorage.getItem("bookingDetails");
    if (data) {
      setBookingDetails(JSON.parse(data));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingDetails) {
        alert("Booking details not found!");
        return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare the parameters for the EmailJS template
    const templateParams = {
        ...formState,
        booking_type: bookingDetails.selectedPackage ? "Package" : "Custom Tour",
        selection_summary: bookingDetails.selectedPackage
            ? bookingDetails.selectedPackage.title
            : bookingDetails.selectedTours.map(t => t.title).join(', '),
        num_persons: bookingDetails.numPersons,
        vehicle: bookingDetails.selectedVehicle,
        total_price: bookingDetails.totalPrice,
    };

    emailjs.send(
        "cloudwork18@gmail.com",     // Replace with your EmailJS Service ID
        "cloudwork18@gmail.com",    // Replace with your EmailJS Template ID
        templateParams,
        "service_dx8mb2q"      // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitStatus("success");
          localStorage.removeItem("bookingDetails"); // Clear data after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (!bookingDetails) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl text-darkblue">Loading booking details...</h1>
            <p className="mt-4">If you are not redirected, please <Link to="/BookNow" className="text-blue-600 hover:underline">
  Go back to the booking page
</Link>.</p>
        </div>
    );
  }

  // If submission was successful, show a confirmation message
  if (submitStatus === 'success') {
    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-3xl font-bold text-green-600">Booking Request Sent!</h1>
            <p className="mt-4 text-lg">Thank you for your booking. We have received your request and will contact you shortly via email to confirm the details.</p>
            <a href="/" className="mt-6 px-6 py-2 bg-darkblue text-white font-semibold rounded-lg">Back to Home</a>
        </div>
        <BottomBar/>
        </>
    )
  }

  return (
    <>
      <Navbar />
      <BottomBar />
      <div className="min-h-screen w-full px-4 sm:px-8 py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold text-darkblue text-center mb-6">
            Confirm Your Booking
          </h1>

          {/* Booking Summary Section */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 mb-8">
            <h2 className="text-2xl font-bold text-darkblue mb-4">Your Selection</h2>
            {bookingDetails.selectedPackage ? (
              <div className="mb-2">
                <span className="font-semibold">Package:</span> {bookingDetails.selectedPackage.title}
              </div>
            ) : (
              <div>
                <span className="font-semibold">Selected Tours:</span>
                <ul className="list-disc list-inside ml-4">
                  {bookingDetails.selectedTours.map(tour => <li key={tour.title}>{tour.title}</li>)}
                </ul>
              </div>
            )}
            <p className="mt-2"><span className="font-semibold">Persons:</span> {bookingDetails.numPersons}</p>
            <p><span className="font-semibold">Vehicle:</span> {bookingDetails.selectedVehicle}</p>
            <p className="text-xl font-bold text-lightblue mt-3">
              <span className="font-semibold text-darkblue">Total:</span> {bookingDetails.totalPrice}
            </p>
          </div>

          {/* User Information Form */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-2xl font-bold text-darkblue mb-4">Your Information</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="user_name" id="user_name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-darkblue focus:border-darkblue" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="user_email" id="user_email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-darkblue focus:border-darkblue" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" name="user_phone" id="user_phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-darkblue focus:border-darkblue" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="user_requests" className="block text-sm font-medium text-gray-700">Special Requests (Optional)</label>
              <textarea name="user_requests" id="user_requests" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-darkblue focus:border-darkblue" onChange={handleInputChange}></textarea>
            </div>
            {submitStatus === 'error' && <p className="text-red-600">Failed to send booking request. Please try again or contact us directly.</p>}
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full py-3 px-4 bg-darkblue text-white font-semibold rounded-lg hover:bg-darkblue/90 transition disabled:bg-gray-400">
                {isSubmitting ? "Sending..." : "Confirm & Book Now"}
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;