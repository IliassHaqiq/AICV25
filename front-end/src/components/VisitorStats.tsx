import { useEffect } from 'react';

const VisitorStats: React.FC = () => {
  useEffect(() => {
    const updateStats = () => {
      const totalVisits = parseInt(localStorage.getItem('visitorCount') || '0');
      const uniqueVisitors = parseInt(localStorage.getItem('uniqueVisitors') || '0');
      const lastVisit = localStorage.getItem('lastVisit') || '';
      
      // Log stats to console only
      console.log('=== Visitor Statistics ===');
      console.log('Total Visits:', totalVisits);
      console.log('Unique Visitors:', uniqueVisitors);
      console.log('Last Visit:', lastVisit);
      console.log('========================');
    };
    
    updateStats();
    // Update every 30 seconds
    const interval = setInterval(updateStats, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Return null to not render anything
  return null;
};

export default VisitorStats;
