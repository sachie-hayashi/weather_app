import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="btn-toggle">
      <Icon name="plus" />
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
