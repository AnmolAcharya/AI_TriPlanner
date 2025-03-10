////////////////////////////////////////////////
import { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// import jwtDecode from "jwt-decode"; // ✅ Correct way to import
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Manual Google Login Function
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      try {
        const decodedUser = jwtDecode(credentialResponse.credential);
        setUser(decodedUser);
        localStorage.setItem("user", JSON.stringify(decodedUser));
        console.log("✅ Logged in user:", decodedUser);
      } catch (error) {
        console.error("Google Login Error:", error);
      }
    },
    onError: () => console.log("Login Failed"),
  });

  // Logout Function
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

    // // ✅ Check if the current path is the landing page
    // const isLandingPage = location.pathname === "/";

    return (
      <nav className="navbar">
        <div className="logo-container">
          <img src="/plane.jpg" alt="TravelAI Logo" className="logo-img" />
          <span className="logo-text">TravelAI</span>
        </div>
        <div className="nav-links">
          {user && (
            <div className="user-info">
              <img src={user.picture || "/default-avatar.png"} alt="User Avatar" className="user-avatar" />
              {/* <span>{user.name}</span> */}
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>
    );
  }

export default Navbar;
    

//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <img src="/plane.jpg" alt="TravelAI Logo" className="logo-img" />
//         <span className="logo-text">TravelAI</span>
//       </div>
//       <div className="nav-links">
//         {user ? (
//           <div className="user-info">
//             <img src={user.picture || "/default-avatar.png"} alt="User Avatar" className="user-avatar" />
//             <span>{user.name}</span>
//             <button className="logout-btn" onClick={handleLogout}>Logout</button>
//           </div>
//         ) : (
//           <button className="signin-btn" onClick={login}>Try Now!</button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



/////////////////////////////////////////////////////////////////////oldest code below 
// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <div className="travel-app">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="logo">
//           <Link to="/">
//             <img src="/logo.jpg" alt="TravelAI" className="logo-img" />
//             <span>TravelAI</span>
//           </Link>
//         </div>
//           <button className="sign-in-btn">Sign In</button>
//       </nav>
//     </div>
//   )
// }

// export default Navbar