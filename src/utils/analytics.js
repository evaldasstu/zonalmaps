import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

// Init Google Analytics once
const useInitAnalytics = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
    }
  }, []);
};

// Register pageviews
const usePageView = () => {
  useInitAnalytics();
  const location = useLocation();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(process.env.PUBLIC_URL + location.pathname + location.search);
    }
  }, [location]);
};

export default usePageView;
