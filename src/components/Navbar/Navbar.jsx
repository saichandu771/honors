// import React from "react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "../Navbar/navbar.css";
// function Navbar(props) {
//   const [isAuth, setIsAuth] = useState(false);
//   useEffect(() => {
//     if (localStorage.getItem("accessToken") !== null) {
//       setIsAuth(true);
//     }
//     console.log("isAUTH: ", isAuth);
//   }, [isAuth]);

//   return (
//     <div className="navbar-cont">
//       <div className="navbar-left">
//         {isAuth ? (
//           <Link to="/all" className="link-txt">
//             <div>Pulmonary Disease Detection</div>
//           </Link>
//         ) : null}
//       </div>
//       <div className="navbar-right">

//         <Link to="/upload" className="link-txt">
//           <div>Upload</div>
//         </Link>

//         {/*{isAuth ? (
//           <Link to="/">
//             <div>Home</div>
//           </Link>
//         ) : null} */}
//         {isAuth ? (
//           <Link to="/logout">
//             <div>Logout</div>
//           </Link>
//         ) : (
//           <Link to="/login">
//             <div className="login">Login</div>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";
function Navbar(props) {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setIsAuth(true);
    }
    console.log("isAUTH: ", isAuth);
  }, [isAuth]);

  return (
    <div className="navbar-cont">
      <div className="navbar-left">
        {isAuth ? (
          <Link to="upload" className="link-txt">
            <div>Pulmonary Disease Detection</div>
          </Link>
        ) : (
          <Link to="/login" className="link-txt">
            <div>Pulmonary Disease Detection</div>
          </Link>
        )}
      </div>
      <div className="navbar-right">
        {isAuth ? (
          <Link to="/upload" className="link-txt">
            <div>Upload</div>
          </Link>
        ) : null}
        {/*{isAuth ? (
          <Link to="/">
            <div>Home</div>
          </Link>
        ) : null} */}
        {isAuth ? (
          <Link to="/logout">
            <div>Logout</div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="login">Login</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
