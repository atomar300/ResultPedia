// import React, { useState } from "react";
// import "./Header.css";
// import { Link } from "react-router-dom";

// export const Header = () => {
//     const [navOpen, setNavOpen] = useState(false);

//     return (
//         <nav>
//             <Link to="/" className="logo">
//                 ResultPedia
//             </Link>
//             <div className="menu" onClick={() => setNavOpen(!navOpen)}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//             <ul className={navOpen ? "open" : ""}>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/students">Students</Link>
//                 </li>
//                 <li>
//                     <Link to="/courses">Courses</Link>
//                 </li>
//                 <li>
//                     <Link to="/results">Results</Link>
//                 </li>
//             </ul>
//         </nav>

//     );
// };