import React, { useEffect, useState } from 'react'

const Dev = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const token = '6a4e603f05a75928ab5c710511d2aa13f091ff54e0bc6ac8dd4852e3fc2aa6f9'; // Replace with your actual API token
            const response = await fetch('https://api.wistia.com/v1/medias/rfb16kqzoz.json', {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                // Add other headers if required by your API
              },
            });
            const jsonData = await response.json();
        setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures that this effect runs once when the component mounts
  
    const formatDuration = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = Math.round(seconds % 60);
  
      if (hours > 0) {
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      } else {
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      }
    };

    return (
      <div>
          {JSON.stringify(data, null, 2)}
        {/* {formatDuration(data)} */}
      </div>
    );
}

export default Dev