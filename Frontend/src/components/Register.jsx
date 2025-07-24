// src/components/Register.js

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BottomBar from "./bottomBar";
import { FaUser, FaEnvelope, FaPhone, FaReceipt, FaUsers, FaCar, FaSpinner } from "react-icons/fa";

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
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve data from localStorage when the component mounts
        const data = localStorage.getItem("bookingDetails");
        if (data) {
            try {
                setBookingDetails(JSON.parse(data));
            } catch (error) {
                console.error("Failed to parse booking details from localStorage", error);
                setBookingDetails(null); // Set to null if data is corrupted
            }
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

        // --- Improved Template Parameters for a more detailed email ---
        const selection_summary = bookingDetails.selectedPackage ?
            `Package: ${bookingDetails.selectedPackage.title}\nDescription: ${bookingDetails.selectedPackage.description}` :
            `Custom Tour:\n${bookingDetails.selectedTours.map(t => `- ${t.title} (${t.price})`).join('\n')}`;

        const templateParams = {
            ...formState,
            booking_type: bookingDetails.selectedPackage ? "Package" : "Custom Tour",
            selection_summary: selection_summary,
            num_persons: bookingDetails.numPersons,
            vehicle: bookingDetails.selectedVehicle,
            total_price: bookingDetails.totalPrice,
        };

        // --- IMPORTANT: Replace with your actual EmailJS credentials ---
        const SERVICE_ID = "service_dx8mb2q";
        const TEMPLATE_ID = "__ejs-test-mail-service__";
        const PUBLIC_KEY = "DIjhMh-ew5MJXQfop";

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
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

    // Loading State
    if (!bookingDetails && !submitStatus) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
                <FaSpinner className="text-4xl text-blue-600 animate-spin mb-4" />
                <h1 className="text-2xl font-semibold text-gray-700">Loading Booking Details...</h1>
                <p className="mt-4 text-gray-500">
                    If you are not redirected, please{" "}
                    <Link to="/BookNow" className="text-blue-600 hover:underline font-medium">
                        go back to the booking page
                    </Link>.
                </p>
            </div>
        );
    }

    // Success State
    if (submitStatus === 'success') {
        return (
            <>
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                            <i className="fas fa-check text-4xl text-green-600"></i>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">Booking Request Sent!</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Thank you for your booking. We have received your request and will contact you shortly via email to confirm the details.
                        </p>
                        <button onClick={() => navigate('/')} className="mt-8 w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                            Back to Home
                        </button>
                    </div>
                </div>
                <BottomBar />
            </>
        )
    }

    // Main component render (form and summary)
    return (
        <>
            <Navbar />
            <div className="min-h-screen container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                            Confirm Your Amritsar Adventure
                        </h1>
                        <p className="mt-3 text-lg text-gray-500">
                            Please review your selections and provide your details to finalize your booking.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Left Column: Booking Summary */}
                        <div className="lg:col-span-2 order-2 lg:order-1">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <FaReceipt className="text-blue-500 mr-3" />
                                    Your Summary
                                </h2>
                                {bookingDetails && (
                                    <div className="space-y-5">
                                        {bookingDetails.selectedPackage ? (
                                            <div>
                                                <p className="text-sm text-gray-500">Package</p>
                                                <p className="font-bold text-lg text-gray-800">{bookingDetails.selectedPackage.title}</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="text-sm text-gray-500 mb-2">Custom Tour</p>
                                                <ul className="space-y-2">
                                                    {bookingDetails.selectedTours.map(tour => (
                                                        <li key={tour.title} className="flex justify-between items-center text-gray-700">
                                                            <span><i className="fas fa-check-circle text-green-500 mr-2"></i>{tour.title}</span>
                                                            <span className="font-medium text-gray-600">{tour.price}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        <hr className="border-gray-200 my-4" />
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-600 flex items-center"><FaUsers className="mr-2 text-gray-400" />Persons</p>
                                            <p className="font-bold text-gray-800">{bookingDetails.numPersons}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-600 flex items-center"><FaCar className="mr-2 text-gray-400" />Vehicle</p>
                                            <p className="font-bold text-gray-800">{bookingDetails.selectedVehicle}</p>
                                        </div>
                                        <hr className="border-dashed border-gray-300 my-4" />
                                        <div className="flex justify-between items-center mt-4">
                                            <p className="text-lg font-bold text-gray-800">Total Price</p>
                                            <p className="text-2xl font-bold text-blue-600">{bookingDetails.totalPrice}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column: User Information Form */}
                        <div className="lg:col-span-3 order-1 lg:order-2">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <i className="fas fa-user-check text-blue-500 mr-3"></i>
                                    Your Information
                                </h2>
                                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <div className="relative">
                                            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input type="text" name="user_name" id="user_name" required className="pl-10 block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="e.g. John Doe" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input type="email" name="user_email" id="user_email" required className="pl-10 block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="you@example.com" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <div className="relative">
                                            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input type="tel" name="user_phone" id="user_phone" required className="pl-10 block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="+91 98765 43210" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="user_requests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests <span className="text-gray-400">(Optional)</span></label>
                                        <textarea name="user_requests" id="user_requests" rows="4" className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="e.g. wheelchair access, specific pickup time..." onChange={handleInputChange}></textarea>
                                    </div>
                                    {submitStatus === 'error' && <p className="text-red-600 text-center bg-red-50 p-3 rounded-lg">Failed to send booking request. Please try again or contact us directly.</p>}
                                    <div>
                                        <button type="submit" disabled={isSubmitting} className="w-full mt-4 py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition flex items-center justify-center disabled:bg-gray-400">
                                            {isSubmitting ? (
                                                <>
                                                    <FaSpinner className="animate-spin mr-2" />
                                                    Sending...
                                                </>
                                            ) : "Confirm & Book Now"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomBar />
        </>
    );
};

export default Register;
