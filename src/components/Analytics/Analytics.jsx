import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined') {
      // Add your Google Analytics tracking ID here
      const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID
      
      // Create script tag for Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      
      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
      
      // Custom event tracking
      window.trackEvent = (eventName, category, label, value) => {
        gtag('event', eventName, {
          event_category: category,
          event_label: label,
          value: value,
        });
      };
    }
  }, []);

  return null;
};

export default Analytics;