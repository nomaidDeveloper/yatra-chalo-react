// OrderPopup.js
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import firebaseApp from "../../../firebase"; // Import your Firebase configuration

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get a reference to the callable function
      const sendEmail = firebaseApp.functions().httpsCallable("sendEmail");

      // Call the callable function with the form data
      const response = await sendEmail({ name, email, address });
      console.log("Email sent successfully:", response);

      // Clear form fields
      setName("");
      setEmail("");
      setAddress("");

      // Close the popup
      setOrderPopup(false);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
