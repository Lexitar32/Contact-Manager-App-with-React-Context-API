import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <Consumer>
      {(value) => {
        const { contacts } = value;
        return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
            <div className="container">
              <a href="/" className="navbar-brand">
                {branding}
              </a>
              <div>
                <ul className="navbar-nav mr-auto px-2">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="fas fa-home"></i> Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact/add" className="nav-link">
                      <i className="fas fa-plus"></i> Add Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      <i className="fas fa-question"></i> About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <p className="p-2" style={{ color: "white" }}>
                      Number of Contacts: {contacts.length}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }}
    </Consumer>
  );
};

Header.defaultProps = {
  branding: "Lexitar Contact Manager",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
