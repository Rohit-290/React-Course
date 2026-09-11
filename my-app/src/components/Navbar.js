import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        class={`navbar bg-${props.mode} border-bottom border-body`}
        data-bs-theme = {props.mode}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.about}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" onClick={props.toggleModeA} className="btn btn-danger mx-2" id="bOne">Enable Dark Mode 1</button>
          <button type="button" onClick={props.toggleModeB}className="btn btn-warning mx-2" id="bTwo">Enable Dark Mode 2</button>
          <button type="button" onClick={props.toggleModeC}className="btn btn-success mx-1" id="bThree">Enable Dark Mode 3</button>
          </div>
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
