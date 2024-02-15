import React, { useEffect, useState } from 'react'

const Viewscount = (props) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const token = '6a4e603f05a75928ab5c710511d2aa13f091ff54e0bc6ac8dd4852e3fc2aa6f9'; // Replace with your actual API token
            const response = await fetch(`https://api.wistia.com/v1/stats/medias/${props.id}.json`, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                // Add other headers if required by your API
              },
            });
            const jsonData = await response.json();
        setData(jsonData.play_count);
        } catch (error) {
          console.error('Error fetching data:', error);
          setData(0);
        }
      };
  
      fetchData();
    }, [props.id]); // Empty dependency array ensures that this effect runs once when the component mounts
  
    return (
      <div>
          {data}
      </div>
    );
}

export default Viewscount