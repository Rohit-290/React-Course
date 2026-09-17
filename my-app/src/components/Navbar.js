import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav class={`navbar bg-${props.mode} border-bottom border-body`} data-bs-theme = {props.mode}>
        <div className="container-fluid">
         <Link className="navbar-brand" to="#" >
           {props.title}
         </Link>
         <li id="gamma">
         <Link className="nk" to="/" id="gamma" >
             Home
         </Link>
         </li>
         <li id="eta">
         <Link className="nk" to="/about" id="eta" >
             About
         </Link> 
         </li>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
          </form>  */}
          <div className="btn-group" >
          <button type="button" onClick={props.toggleMode} className="btn btn-danger mx-2" id="bOne">Enable Dark Mode </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter tite here",
  about: "About",
};
