// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Auth/Login";
// import Signup from "./components/Auth/Signup";
// import Dashboard from "./pages/Dashboard";
// import ProfileView from "./components/Profile/ProfileView";
// import ProfileEdit from "./components/Profile/ProfileEdit";
// import NotFound from "./pages/NotFound";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<ProfileView />} />
//         <Route path="/profile/edit" element={<ProfileEdit />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// import { Route, Router } from "react-router-dom"
import Login from "./components/Auth/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import React from 'react'
import ProfileView from "./components/Profile/ProfileView";

const App = () => {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<ProfileView/>}/> */}
          {/* <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/profile/edit" element={<ProfileEdit />} /> */}
        {/* </Routes>
      </Router> */}
      <ProfileView/>
    </div>
  )
}

export default App
