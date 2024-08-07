import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const ButtonComponent = (props) => {
  return (
    <>
    <button className="btn gap" id="button">
      <props.icon id="icon-btn" />
      <span className="btn-text">{props.name}</span>
    </button>
    </>
  );
};

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default ButtonComponent;