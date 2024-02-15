import axios from 'axios';
import React, { useEffect, useState } from 'react'
import base_url from '../../api/bootapi';
import moment from 'moment-timezone';
import './css/VideoUpload.css';
import Progressbar from './Progressbar';
import VideoupModal from './VideoupModal';

const VideoUpload = () => {

// image upload api
const [imageUrl, setImageUrl] = useState('');
const [imgProgress,setImgProgress]=useState(0);

const handleImageChange = async (e) => {
  const uploadedImage = e.target.files[0];

  if (uploadedImage) {
    const formData = new FormData();
    formData.append('image', uploadedImage);

    try {
      const response = await axios.post('https://api.imgbb.com/1/upload?key=1edd3d94675a193ef5314a13891c0cf2', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setImgProgress(percentage);
        },
      });
      const imageUrlPath = new URL(response.data.data.url).pathname;
      setImageUrl(imageUrlPath);
    } catch (error) {
      alert('Error uploading image:', error);
    }
  }
};

  //video wistia uplod Api
  const [videoUrl,setVideourl]=useState('');
  const [videoDur,setVideodur]=useState('');
  const [videoupd,setVideoupd]=useState('');
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (event) => {

    const apiToken = '6a4e603f05a75928ab5c710511d2aa13f091ff54e0bc6ac8dd4852e3fc2aa6f9';
    const uploadUrl = 'https://upload.wistia.com/';
  
    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    try {
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'multipart/form-data',
          accept: 'application/json', 
        },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentage);
        },
      });

      const videoid=response.data.hashed_id;
      const videoduration=response.data.duration;
      const videoupdate=response.data.created;

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
      const updatevideo=formatDuration(videoduration);

      const date=new Date(videoupdate);
      const formattedISTDate = moment(date).tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ssZ');

      //setcerdentials
      setVideourl(videoid);
      setVideoupd(formattedISTDate);
      setVideodur(updatevideo);

    } catch (error) {
      alert('Error not uploading file to Wistia:', error.message);
    }
  };

//upload to spring boot api
  const [uploadStatus, setUploadStatus] = useState(null);
  const[videoinfo,setVideoinfo]=useState(
    {
      vDur:"",
      vTitle:"",
      vUrl:"",
      tUrl:"",
      description:"",
      uploadDate:""
    }
  );
  const{vTitle,description}=videoinfo;

  const [errorMessages, setErrorMessages] = useState({
    title: '',
    description: '',
  });

  const onInputchange = (e) => {

  const { name, value } = e.target;

    // Validate Title
    if (name === 'vTitle') {
      if (!value || value.trim() === '') {
        setErrorMessages((prevErrors) => ({ ...prevErrors, title: '* Title is required' }));
      } else if (value.length > 70) {
        setErrorMessages((prevErrors) => ({ ...prevErrors, title: '* Title must be 70 characters or less' }));
      } else {
        setErrorMessages((prevErrors) => ({ ...prevErrors, title: '' }));
      }
    }

    // Validate Description
    if (name === 'description') {
      if (!value || value.trim() === '') {
        setErrorMessages((prevErrors) => ({ ...prevErrors, description: '* Description is required' }));
      } else if (value.length > 250) {
        setErrorMessages((prevErrors) => ({ ...prevErrors, description: '* Description must be 250 characters or less' }));
      } else {
        setErrorMessages((prevErrors) => ({ ...prevErrors, description: '' }));
      }
    }

    // Update videoinfo state
    setVideoinfo({ ...videoinfo, [name]: value });
  };

  const onSubmit=async (e)=>
  {
    e.preventDefault();
    try
    {
      setVideoinfo({ ...videoinfo, uploadDate: videoupd, vDur: videoDur, vUrl: videoUrl, tUrl: imageUrl });
      await axios.post(`${base_url}/upload`, { ...videoinfo, uploadDate: videoupd, tUrl: imageUrl, vDur: videoDur, vUrl: videoUrl });
      console.log(videoinfo);
      setUploadStatus(true);
    }
    catch(err)
    {
      setUploadStatus(false);
    }
  };


   //status relaod
   
   const resetState = () => {
     setVideoinfo({
       vDur: "",
       vTitle: "",
       vUrl: "",
       tUrl: "",
       description: "",
       uploadDate: ""
     });
 
     setVideourl('');
     setVideodur('');
     setVideoupd('');
     setProgress(0);
     setImgProgress(0);
     setImageUrl('');
     setUploadStatus(null);
   };

   useEffect(() => {
    if (uploadStatus) {
      setTimeout(() => {
        resetState();
      }, 3000);
    }
  }, [uploadStatus]);


  return (
    <div className='Video-form'>
      <div className='form-container'>
          <h1>VIDEO UPLOAD</h1>
          <h3>Details</h3>
          <form className='main-form' onSubmit={(e)=>onSubmit(e)}>
            <div id='row-1' >
              <label htmlFor='title'>Title</label>
              <input type='text' 
                id='title' 
                name='vTitle' 
                placeholder='Title' 
                value={vTitle}
                required
                onChange={(e)=>onInputchange(e)}
              />
              <span id='error-messages'>
                {errorMessages.title}
              </span>
            </div>
            <div id='row-2'>
              <label htmlFor='file-video'>Select Video</label>
              <section className='up-btn-wrapper'>
                <input type='file' 
                  id='file-video' 
                  accept='video/*'
                  placeholder='select Video' 
                  style={{ display: 'none' }}
                  required
                  onChange={handleFileChange}
                />
                <section className='file-and-load'>
                  <i id='up-btn-icon' className="fa-solid fa-file-arrow-up fa-2x"
                      onClick={() => document.getElementById('file-video').click()}>
                  </i>
                  <section className="progress-container">
                    <Progressbar progress={progress} />
                  </section>
                </section>
              </section>
            </div>
            <div id='row-2'>
              <label htmlFor='file-image'>Select Image</label>
              <section className='up-btn-wrapper'>
              <input type='file' 
                id='file-image'  
                accept='image/*'
                placeholder='select Image'
                required 
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <section className='file-and-load'>
                  <i id='up-btn-icon' className="fa-solid fa-file-arrow-up fa-2x"
                      onClick={() => document.getElementById('file-image').click()}>
                  </i>
                  <section className="progress-container">
                    <Progressbar progress={imgProgress} heightT={20} />
                  </section>
                </section>
                </section>
            </div>
            <div id='row-4'>
              <label htmlFor='description'>Description</label>
              <textarea type='text' 
                id='description' 
                name='description' 
                placeholder='Description' 
                value={description}
                onChange={(e)=>onInputchange(e)}
                rows={5}
                required
              />
              <span id='error-messages'>
                {errorMessages.description}
              </span>
            </div>
            <div id='btn-con'>
              <button>Upload Video</button>
            </div>
          </form>
      </div>
      <VideoupModal
        isOpen={uploadStatus !== null}
        onClose={() => setUploadStatus(null)}
        status={uploadStatus}
        message={uploadStatus ? 'Your video has been uploaded successfully.' : 'Upload failed. Please try again.'}
     
      />
    </div>
  )
}

export default VideoUpload