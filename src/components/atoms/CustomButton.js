import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ text='Button Text', onClick=()=>{}, classes='bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300' }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-colors duration-300 ease-in-out ${classes}`}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,   
  onClick: PropTypes.func.isRequired,  
  classes: PropTypes.string            
};

export default CustomButton;