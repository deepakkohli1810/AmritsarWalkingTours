import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BottomBar from "./bottomBar";
import Footer from "./Footer";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaReceipt,
  FaUsers,
  FaCar,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";

const Register = () => {
    const greetings = [
      "Sat Shri Akal🙏",
      "Hello🙏",
      "Namaste🙏",
    ];
    const [currentGreetingIndex, setCurrentGreetingIndex] =
      useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentGreetingIndex(
          (prevIndex) => (prevIndex + 1) % greetings.length
        );
      }, 2000);

      return () => clearInterval(interval);
    }, []);

  const [bookingDetails, setBookingDetails] =
    useState(null);
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  // Load booking details from localStorage
  useEffect(() => {
    const data = localStorage.getItem("bookingDetails");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setBookingDetails(parsed);
      } catch (error) {
        setBookingDetails(null);
      }
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookingDetails) {
      alert(
        "Booking details not found! Please go back and select your tour."
      );
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      ...formState,
      bookingDetails,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setSubmitStatus("success");
        localStorage.removeItem("bookingDetails");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state
  if (!bookingDetails && !submitStatus) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-darkblue flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-darkblue to-purple-700 rounded-full opacity-20 animate-ping"></div>
            <div className="h-16 w-16 mx-auto bg-gradient-to-r from-darkblue to-purple-700 rounded-full flex items-center justify-center">
              <FaSpinner className="text-2xl text-white animate-spin" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-darkblue mb-2">
            Loading Your Booking Details
          </h1>

          <p className="text-gray-600 max-w-md mx-auto mb-4">
            We're preparing your personalized Amritsar tour
            experience...
          </p>
        </motion.div>
      </div>
    );
  }

  // Show success message
  if (submitStatus === "success") {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="bg-gradient-to-r from-darkblue to-purple-700 p-1"></div>

              <div className="p-8 md:p-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6"
                >
                  <FaCheckCircle className="text-5xl text-green-600" />
                </motion.div>

                <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
                  Booking Confirmed!
                </h1>

                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  Thank you for choosing Amritsar Walking
                  Tour. Your booking request has been
                  successfully submitted. Our team will
                  contact you within 24 hours to confirm
                  availability and payment details.
                </p>

                <div className="bg-indigo-50 rounded-xl p-5 mb-6 border border-indigo-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaInfoCircle className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm text-indigo-700">
                        Your booking reference number is{" "}
                        <span className="font-medium">
                          AMR-
                          {Math.floor(
                            Math.random() * 10000
                          )}
                        </span>
                        . Please keep this for future
                        reference.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => navigate("/")}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-darkblue to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-darkblue/90 hover:to-purple-700/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue"
                  >
                    Return to Home
                  </button>

                  <button
                    onClick={() => navigate("/my-bookings")}
                    className="w-full py-3.5 px-6 border border-darkblue text-darkblue bg-white font-semibold rounded-xl shadow-sm hover:bg-darkblue/5 transition-all duration-300"
                  >
                    View My Bookings
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <BottomBar />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-4 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="inline-block "
              >
                <div className="text-start">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="inline-block mb-4"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="inline-block mb-4"
                      >
                        <div className="text-center">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentGreetingIndex}
                              initial={{
                                y: 20,
                                opacity: 0,
                              }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{
                                type: "tween",
                                duration: 0.3,
                                ease: "easeOut",
                              }}
                              className="greeting text-3xl mt-4 font-fredoka font-medium text-yellow-600"
                            >
                              {
                                greetings[
                                  currentGreetingIndex
                                ]
                              }
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="max-w-2xl mx-auto">
                <p className="text-gray-600 text-lg">
                  Review your tour selections and provide
                  your details to secure your personalized
                  Amritsar experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Left Column: Booking Summary */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-2"
              >
                <h1 className="text-3xl px-1  md:text-4xl font-medium text-gray-800 mb-3">
                  Complete Your Booking
                </h1>
                <div className="sticky top-8">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="bg-gradient-to-r from-darkblue to-purple-700 p-0.5"></div>

                    <div className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-r from-darkblue to-purple-700 p-2 rounded-lg mr-3">
                          <FaReceipt className="text-xl text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          Your Booking
                        </h2>
                      </div>

                      {bookingDetails && (
                        <div className="space-y-6">
                          {/* Tour Selection */}
                          <div>
                            {bookingDetails.selectedPackage ? (
                              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <p className="text-sm text-indigo-700 font-medium">
                                      Selected Package
                                    </p>
                                    <p className="font-bold text-xl text-darkblue mt-1">
                                      {
                                        bookingDetails
                                          .selectedPackage
                                          .title
                                      }
                                    </p>
                                  </div>
                                  <span className="bg-darkblue text-white text-xs px-3 py-1 rounded-full font-medium">
                                    POPULAR
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <p className="text-sm text-gray-500 mb-3 font-medium flex items-center">
                                  <span className="bg-darkblue text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2">
                                    1
                                  </span>
                                  Custom Tour Selection
                                </p>
                                <div className="space-y-3">
                                  {bookingDetails.selectedTours.map(
                                    (tour) => (
                                      <div
                                        key={tour.key}
                                        className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-darkblue/30 transition"
                                      >
                                       
                                        <div className="flex-1">
                                          <p className="font-medium text-gray-800">
                                            {tour.title}
                                          </p>
                                          <p className="text-sm text-gray-500">
                                            {tour.includes}
                                          </p>
                                        </div>
                                        <p className="font-semibold text-darkblue">
                                          {tour.price}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Number of Persons */}
                          <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-center">
                              <div className="bg-gradient-to-r from-darkblue to-purple-700 p-2 rounded-lg mr-3">
                                <FaUsers className="text-lg text-white" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Travelers
                                </p>
                                <p className="font-bold text-xl text-darkblue">
                                  {
                                    bookingDetails.numPersons
                                  }{" "}
                                  person
                                  {bookingDetails.numPersons >
                                  1
                                    ? "s"
                                    : ""}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Vehicle Selection */}
                          <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-center">
                              <div className="bg-gradient-to-r from-darkblue to-purple-700 p-2 rounded-lg mr-3">
                                <FaCar className="text-lg text-white" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Vehicle Type
                                </p>
                                <div>
                                  <p className="font-bold text-xl text-darkblue">
                                    {
                                      bookingDetails.selectedVehicle
                                    }
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {
                                      bookingDetails
                                        .vehicleDetails
                                        ?.capacity
                                    }
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Price Breakdown */}
                          <div className="pt-5 border-t border-gray-200">
                            <div className="space-y-3 mb-4">
                              <div className="flex justify-between text-base">
                                <span className="text-gray-600">
                                  Tour Cost
                                </span>
                                <span className="font-medium text-gray-800">
                                  {bookingDetails.tourPrice ||
                                    "₹0"}
                                </span>
                              </div>
                              <div className="flex justify-between text-base">
                                <span className="text-gray-600">
                                  Vehicle Cost
                                </span>
                                <span className="font-medium text-gray-800">
                                  {bookingDetails.vehiclePrice ||
                                    "₹0"}
                                </span>
                              </div>
                            </div>

                            <div className="pt-4 border-t border-dashed border-gray-300">
                              <div className="flex justify-between items-center">
                                <p className="text-lg font-bold text-gray-800">
                                  Total Amount
                                </p>
                                <p className="text-2xl font-bold bg-gradient-to-r from-darkblue to-purple-700 bg-clip-text text-transparent">
                                  {
                                    bookingDetails.totalPrice
                                  }
                                </p>
                              </div>
                            </div>

                            {/* <div className="mt-5 pt-4 border-t border-gray-100">
                              <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
                                <FaInfoCircle className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                                <p className="text-sm text-yellow-800">
                                  A 20% deposit is required
                                  to confirm your booking.
                                  The remaining balance can
                                  be paid on the day of the
                                  tour.
                                </p>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: User Information Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <div className="bg-gradient-to-r from-darkblue to-purple-700 p-0.5"></div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-darkblue to-purple-700 p-2 rounded-lg mr-3">
                        <FaUser className="text-xl text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        Your Information
                      </h2>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Full Name */}
                      <div className="relative">
                        <label
                          htmlFor="user_name"
                          className="block text-sm font-medium text-gray-700 mb-1.5 pl-1"
                        >
                          Full Name{" "}
                          <span className="text-red-500">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            required
                            value={formState.user_name}
                            onChange={handleInputChange}
                            className="pl-10 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-darkblue/20 focus:border-darkblue outline-none transition"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <label
                          htmlFor="user_email"
                          className="block text-sm font-medium text-gray-700 mb-1.5 pl-1"
                        >
                          Email Address{" "}
                          <span className="text-red-500">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            required
                            value={formState.user_email}
                            onChange={handleInputChange}
                            className="pl-10 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-darkblue/20 focus:border-darkblue outline-none transition"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <label
                          htmlFor="user_phone"
                          className="block text-sm font-medium text-gray-700 mb-1.5 pl-1"
                        >
                          Phone Number{" "}
                          <span className="text-red-500">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaPhone className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="user_phone"
                            id="user_phone"
                            required
                            value={formState.user_phone}
                            onChange={handleInputChange}
                            className="pl-10 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-darkblue/20 focus:border-darkblue outline-none transition"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div className="relative">
                        <label
                          htmlFor="user_requests"
                          className="block text-sm font-medium text-gray-700 mb-1.5 pl-1"
                        >
                          Special Requests{" "}
                          <span className="text-gray-400">
                            (Optional)
                          </span>
                        </label>
                        <textarea
                          name="user_requests"
                          id="user_requests"
                          rows="4"
                          value={formState.user_requests}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-darkblue/20 focus:border-darkblue outline-none transition resize-none"
                          placeholder="e.g. wheelchair access, specific pickup time, dietary needs..."
                        ></textarea>
                      </div>

                      {/* Error Message */}
                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-start"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <FaTimesCircle className="h-5 w-5 text-red-500" />
                          </div>
                          <p className="ml-3 text-sm">
                            Failed to send booking request.
                            Please check your internet
                            connection and try again. If the
                            issue persists, contact us
                            directly at{" "}
                            <a
                              href="tel:+911234567890"
                              className="font-medium hover:underline"
                            >
                              +91 12345 67890
                            </a>
                            .
                          </p>
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 bg-gradient-to-r from-darkblue to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <FaSpinner className="animate-spin -ml-1 mr-2 h-5 w-5" />
                            Processing Your Booking...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <span>Confirm & Book Now</span>
                            <span className="ml-2">→</span>
                          </span>
                        )}
                      </motion.button>

                      <p className="text-center text-sm text-gray-500 mt-4">
                        By proceeding, you agree to our{" "}
                        <a
                          href="/terms"
                          className="text-darkblue hover:underline font-medium"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy"
                          className="text-darkblue hover:underline font-medium"
                        >
                          Privacy Policy
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 text-center max-w-3xl mx-auto"
            >
              <div className="bg-gradient-to-r from-darkblue/5 to-purple-700/5 p-6 rounded-2xl border border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-darkblue to-purple-700 p-2 rounded-xl">
                      <div className="bg-white p-2 rounded-lg">
                        <FaInfoCircle className="text-darkblue" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-center">
                    Have questions about your tour? Contact
                    our travel specialists at{" "}
                    <a
                      href="tel:+911234567890"
                      className="text-darkblue font-medium hover:underline"
                    >
                      +91 12345 67890
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:info@amritsartours.com"
                      className="text-darkblue font-medium hover:underline"
                    >
                      info@amritsartours.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <BottomBar />
      <Footer />
    </>
  );
};

export default Register;
