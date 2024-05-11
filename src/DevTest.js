// import axios from 'axios';
import React from 'react'
// import moment from 'moment-timezone';
const DevTest = () => {
  
  // const [imageUrl, setImageUrl] = useState('');

  // const handleImageChange = async (e) => {
  //   const uploadedImage = e.target.files[0];

  //   if (uploadedImage) {
  //     const formData = new FormData();
  //     formData.append('image', uploadedImage);

  //     try {
  //       const response = await axios.post('https://api.imgbb.com/1/upload?key=1edd3d94675a193ef5314a13891c0cf2', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         }
  //       });

  //       // Extract the path from the image URL
  //       const imageUrlPath = new URL(response.data.data.url).pathname;

  //       setImageUrl(imageUrlPath);

  //       console.log('Image uploaded successfully:', imageUrlPath);
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //       // Handle errors (e.g., show an error message)
  //     }
  //   }
  // };

  // const handleSubmit=(e)=>
  // {
  //   e.preventDefault();
  //   const currentDate=moment().tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ssZ');
  //   console.log(currentDate);
  // }



  //

  // const [progress, setProgress] = useState(0);

  // const handleFileChange = async (event) => {

  //   const apiToken = '6a4e603f05a75928ab5c710511d2aa13f091ff54e0bc6ac8dd4852e3fc2aa6f9';
  //   const uploadUrl = 'https://upload.wistia.com/';
  
  //   const formData = new FormData();
  //   formData.append('file', event.target.files[0]);

  //   try {
  //     const response = await axios.post(uploadUrl, formData, {
  //       headers: {
  //         Authorization: `Bearer ${apiToken}`,
  //         'Content-Type': 'multipart/form-data',
  //         accept: 'application/json', 
  //       },
  //       onUploadProgress: (progressEvent) => {
  //         const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
  //         setProgress(percentage);
  //       },
  //     });

  //     const videoid=response.data.hashed_id;
  //     const videoduration=response.data.duration;
  //     const videoupdate=response.data.created;


  //     const formatDuration = (seconds) => {
  //       const hours = Math.floor(seconds / 3600);
  //       const minutes = Math.floor((seconds % 3600) / 60);
  //       const remainingSeconds = Math.round(seconds % 60);
    
  //       if (hours > 0) {
  //         return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  //       } else {
  //         return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  //       }
  //     };

  //     const date=new Date(videoupdate);
  //     const formattedISTDate = moment(date).tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ssZ');
  //     console.log(formatDuration(videoduration));
      
  //     console.log(formattedISTDate);
  //     console.log(videoid);
      
  //   } catch (error) {
  //     console.error('Error not uploading file to Wistia:', error.message);
  //     // Handle error
  //   }
  // };

  return (
    <div>
      {/* <input type="file" onChange={handleImageChange} />
      <input type='text' value={imageUrl} readOnly/>
      {imageUrl && (
        <div>
          <p>Image URL: {imageUrl}</p>
          <img src={`https://i.ibb.co${imageUrl}`} alt="Uploaded" />
        </div>
      )}
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type='text'  />
        <button type='submit'>Check</button>
      </form> */}
      {/*
      test the wistia api
      */}
        
        {/* <label>
          Select File:
          <input type="file" onChange={handleFileChange} />
        </label>
      {progress > 0 && (
        <div>
          <p>Upload Progress: {progress}%</p>
          <progress value={progress} max={100}></progress>
        </div>
      )} */}
      TEST CASE FAILED
    </div>
  );
}

export default DevTest