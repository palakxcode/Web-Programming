// Child.js
import PropTypes from 'prop-types';

const Child = ({ message }) => <p>{message}</p>;

Child.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;
