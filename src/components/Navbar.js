import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
    <a class="navbar-brand" href="/">WikiCountries</a>
      <div class="container">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
        
        <Link to="/CountriesList">LAB - WikiCountries</Link>
      </div>
    </nav>
  );
}

export default Navbar;
