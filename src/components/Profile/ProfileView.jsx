import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile/view", {
          withCredentials: true, // Send cookies with the request
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Full Name: {profile.firstName} {profile.lastName}</p>
      <p>Email: {profile.emailId}</p>
    </div>
  );
};

export default Profile;
