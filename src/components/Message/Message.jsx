import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faCheckCircle,
  faFan,
} from '@fortawesome/free-solid-svg-icons';
import './Message.scss';

const icons = {
  danger: <FontAwesomeIcon icon={faExclamationCircle} />,
  info: <FontAwesomeIcon icon={faFan} spin />,
  warning: <FontAwesomeIcon icon={faExclamationTriangle} />,
  success: <FontAwesomeIcon icon={faCheckCircle} />,
};

export default function Message({
  type, text, dismissible, onClose,
}) {
  return (
    <Alert variant={type} className="d-flex" dismissible={dismissible} onClose={onClose}>
      {icons[type]}
      {text}
    </Alert>
  );
}

Message.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dismissible: PropTypes.bool,
  onClose: PropTypes.func,
};

Message.defaultProps = {
  dismissible: false,
  onClose: () => {},
};
