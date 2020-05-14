import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faCheckCircle,
  faFan,
} from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from 'react-spring';
import './Message.scss';

const icons = {
  danger: <FontAwesomeIcon icon={faExclamationCircle} />,
  info: <FontAwesomeIcon icon={faFan} spin />,
  warning: <FontAwesomeIcon icon={faExclamationTriangle} />,
  success: <FontAwesomeIcon icon={faCheckCircle} />,
};

const Message = ({ type, text, dismissible, selfDestructive, dismiss }) => {
  const message = useRef();

  const [props, setAnimationParams] = useSpring(() => ({
    from: { right: '100%' },
    to: { right: '0%' },
    config: { duration: 3000 },

    // Progress bar animation completion callback
    onRest: () => {
      if (message.current) {
        dismiss();
      }
    },
  }));

  // Closing message speeds up self-destruct
  const speedUp = () => {
    setAnimationParams({ config: { duration: 200 } });
  };

  const handleClose = () => {
    if (selfDestructive) {
      speedUp();
    } else {
      dismiss();
    }
  };

  return (
    <Alert
      variant={type}
      className="d-flex"
      dismissible={dismissible}
      onClose={() => handleClose()}
      ref={message}
    >
      {icons[type]}
      {text}
      {selfDestructive && <animated.div className="zm-progress-bar" style={props} />}
    </Alert>
  );
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dismissible: PropTypes.bool,
  selfDestructive: PropTypes.bool,
  dismiss: PropTypes.func,
};

Message.defaultProps = {
  dismissible: false,
  selfDestructive: false,
  dismiss: () => {},
};

export default Message;
