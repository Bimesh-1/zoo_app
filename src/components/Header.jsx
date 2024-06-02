// import { Link, NavLink } from 'react-router-dom';
// import '../components/css/header.css';

// const Header = () => {
//   return (
//     <header>
//       <Link to="/">
//         <h1>Zoo</h1>
//       </Link>
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/animals">Animals</NavLink>
//           </li>
//           <li>
//             <NavLink to="/birds">Birds</NavLink>
//           </li>
//           <li>
//             <NavLink to="/insects">Insects</NavLink>
//           </li>
//           <li>
//             <NavLink to="/fishes">Fishes</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../components/css/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Link to="/">
        <h1>Zoo</h1>
      </Link>
      <nav>
        <button className="burger-menu" onClick={toggleMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/animals" onClick={toggleMenu}>Animals</NavLink>
          </li>
          <li>
            <NavLink to="/birds" onClick={toggleMenu}>Birds</NavLink>
          </li>
          <li>
            <NavLink to="/insects" onClick={toggleMenu}>Insects</NavLink>
          </li>
          <li>
            <NavLink to="/fishes" onClick={toggleMenu}>Fishes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
