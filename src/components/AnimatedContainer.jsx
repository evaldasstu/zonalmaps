import React, { useState, useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import './AnimatedContainer.scss';

function useMeasure() {
  const ref = useRef();
  const [bounds, setBounds] = useState(
    {
      left: 0, top: 0, width: 0, height: 0,
    },
  );
  const [observer] = useState(() => new ResizeObserver(([entry]) => setBounds(entry.contentRect)));
  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer]);
  return [{ ref }, bounds];
}

const animationConfig = {
  stretch: {
    mass: 0.2,
    tension: 150,
    friction: 10,
  },
  fade: {
    tension: 100,
  },
};

export default function AnimatedContainer({ children, isOpen }) {
  const [bindHeight, { height: measuredHeight }] = useMeasure();
  const { height } = useSpring({
    from: { height: 0 },
    to: { height: isOpen ? measuredHeight : 0 },
    config: animationConfig.stretch,
  });
  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: isOpen ? 1 : 0 },
    config: animationConfig.fade,
  });

  return (
    <animated.div style={{ height, opacity }} className="zm-animated-container">
      <div ref={bindHeight.ref}>
        {children}
      </div>
    </animated.div>
  );
}

AnimatedContainer.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
};

AnimatedContainer.defaultProps = {
  children: null,
  isOpen: false,
};
