import React, { useState, useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import './AnimatedContainer.scss';

const useMeasure = () => {
  const ref = useRef();
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  // Get own height for performing stretch animation
  const [observer] = useState(() => new ResizeObserver(([entry]) => setBounds(entry.contentRect)));

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer]);
  return [{ ref }, bounds];
};

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

const AnimatedContainer = ({ children, isExpanded }) => {
  const [bindHeight, { height: measuredHeight }] = useMeasure();

  // Container height stretch
  const { height } = useSpring({
    from: { height: 0 },
    to: { height: isExpanded ? measuredHeight : 0 },
    config: animationConfig.stretch,
  });

  // Contents fade-in
  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: isExpanded ? 1 : 0 },
    config: animationConfig.fade,
  });

  return (
    <animated.div style={{ height, opacity }} className="zm-animated-container">
      <div ref={bindHeight.ref}>{children}</div>
    </animated.div>
  );
};

AnimatedContainer.propTypes = {
  children: PropTypes.element,
  isExpanded: PropTypes.bool.isRequired,
};

AnimatedContainer.defaultProps = {
  children: null,
};

export default AnimatedContainer;
