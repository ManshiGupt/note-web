import React, { useState, useEffect } from "react";
// import { editProfile } from "../services/authService";
import { editProfile } from "../services/profileService";


const Profile = ({ darkMode }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName , setLastName ] = useState("");
  const [emailId, setEmailId] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
 

  useEffect(() => {
    // You can pre-fill user data from a global state or API if required
    // Example:
    // setfirstName(user.firstName);
    // setEmail(user.email);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editProfile({ firstName,lastName, emailId , gender , age });
    alert("Profile updated!");
  };

  return (
    <div className={`min-h-screen flex justify-center items-center py-10 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className={`bg-white rounded-lg shadow-xl w-full max-w-lg p-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className={`text-3xl font-semibold text-center  mb-6`}>
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* firstName Field */}
          <div>
            <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`} htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your firstName"
              className={`w-full px-4 py-2 mt-1 border ${darkMode ? "border-gray-600 text-white" : "border-gray-300 text-black"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`} htmlFor="firstName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last Name"
              className={`w-full px-4 py-2 mt-1 border ${darkMode ? "border-gray-600 text-white" : "border-gray-300 text-black"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="emailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 mt-1 border ${darkMode ? "border-gray-600 text-white" : "border-gray-300 text-black"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`} htmlFor="firstName">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Enter your Gender"
              className={`w-full px-4 py-2 mt-1 border ${darkMode ? "border-gray-600 text-white" : "border-gray-300 text-black"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`} htmlFor="firstName">
              Age
            </label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className={`w-full px-4 py-2 mt-1 border ${darkMode ? "border-gray-600 text-white" : "border-gray-300 text-black"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
          </div>

          {/* Update Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
