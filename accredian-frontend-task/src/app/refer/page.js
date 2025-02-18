"use client";
import { useState } from "react";

export default function ReferEarn() {
  const [showModal, setShowModal] = useState(false);
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // ✅ Success message state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(""); // Clear previous messages

    const formData = {
      referrerName,
      referrerEmail,
      friendName,
      friendEmail,
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/refer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Referral sent successfully! 🎉"); // ✅ Show success message
        setReferrerName("");
        setReferrerEmail("");
        setFriendName("");
        setFriendEmail("");
      } else {
        const errorData = await response.json();
        alert(`Failed to send referral: ${errorData.message}`);
      }
    } catch (error) {
      alert("Network error! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6">
      {/* Hero Section */}
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-extrabold text-blue-700 leading-tight">
          Refer & Earn <span className="text-blue-500">Rewards</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Invite your friends and get exclusive rewards! Start referring today
          and enjoy special benefits.
        </p>
        <button
          onClick={() => {
            setShowModal(true);
            setSuccessMessage(""); // ✅ Reset success message when opening modal
          }}
          className="mt-6 px-8 py-3 text-lg font-medium bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Refer Now
        </button>
      </div>

      {/* Referral Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-8 rounded-xl shadow-xl w-96 transform transition-all scale-95 animate-fadeIn">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Refer a Friend
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                ✖
              </button>
            </div>

            {/* Show success message */}
            {successMessage && (
              <div className="mt-4 bg-green-100 text-green-700 p-3 rounded-md text-center">
                {successMessage}
              </div>
            )}

            {/* Referral Form (Hidden when success message is shown) */}
            {!successMessage && (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <InputField
                  label="Your Name"
                  type="text"
                  placeholder="Enter your name"
                  value={referrerName}
                  onChange={(e) => setReferrerName(e.target.value)}
                />
                <InputField
                  label="Your Email"
                  type="email"
                  placeholder="Enter your email"
                  value={referrerEmail}
                  onChange={(e) => setReferrerEmail(e.target.value)}
                />
                <InputField
                  label="Friend's Name"
                  type="text"
                  placeholder="Enter your friend's name"
                  value={friendName}
                  onChange={(e) => setFriendName(e.target.value)}
                />
                <InputField
                  label="Friend's Email"
                  type="email"
                  placeholder="Enter your friend's email"
                  value={friendEmail}
                  onChange={(e) => setFriendEmail(e.target.value)}
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Referral"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Input Field Component
const InputField = ({ label, type, placeholder, value, onChange }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
    />
  </div>
);
