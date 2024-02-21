import React, { useEffect, useState } from 'react'
import './css/EditModalstyle.css'
import axios from 'axios';
import base_url from '../../api/bootapi';
const EditModal = ({ isOpen, closeModal,vd }) => {

  const[editedData,setEditedData]=useState({});
  const[upId,setUpId]=useState(0);
  const[delVHID,setDelVHID]=useState('');

  useEffect(()=>
  {
    if(vd)
    {
      setEditedData(vd);
      setUpId(vd.vId);
      setDelVHID(vd.vUrl);
    }
  },[vd]);



  const handleInputChange = (e, fieldName) => {
    setEditedData({ ...editedData, [fieldName]: e.target.value});
};
/// update to Spring Api
  const onsubmitup =async(e)=>
  {
    e.preventDefault();
    try
    {
        await axios.put(`${base_url}/update/${upId}`,editedData);
        closeModal(true);
    }
    catch(error)
    {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in Node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
      alert("Error occurred. Please check console for details.");
    }
    }


const handleClose = () => {
  setEditedData(vd); // Reset editedData to original data
  closeModal(); // Close modal without saving
};

//image change
  const handleImageChange = async (e) => {
    const uploadedImage = e.target.files[0];

    if (uploadedImage) {
      const formData = new FormData();
      formData.append('image', uploadedImage);

      try {
        const response = await axios.post('https://api.imgbb.com/1/upload?key=1edd3d94675a193ef5314a13891c0cf2', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        const imageUrlPath = new URL(response.data.data.url).pathname;
        setEditedData({...editedData,tUrl:imageUrlPath});
      } catch (error) {
        alert('Error uploading image:', error);
      }
    }
  };

//delete details from spring Api and wistia api. imbgg Api does not support Delete using Api so it is not possible to delete details of imbgg(image details) 
const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);


const handelDeletedetails=()=>
{
  setShowDeleteConfirmation(true);
}

  const confirmDeletedetails=async ()=>
  {
      const apiToken = '6a4e603f05a75928ab5c710511d2aa13f091ff54e0bc6ac8dd4852e3fc2aa6f9';
      const delUrl = `https://api.wistia.com/v1/medias/${delVHID}.json`;
      try
      {
        const resdel=await axios.delete(delUrl,{
          headers: {
            Authorization: `Bearer ${apiToken}`,
            accept: 'application/json', 
          }
        });
        if(resdel)
        {
          const spdel=await axios.delete(`${base_url}/delete/${upId}`);
          if(spdel)
          {
            closeModal();
            window.location.reload(true);
          } 
        }
      }
      catch(error)
      {
          console.log(error);
      }
  };

  const handleCancelDelete=()=>
  {
    setShowDeleteConfirmation(false);
  }


//////////////////////////////////////////////////////////
    if (!isOpen) return null;
    return (
      <div className="ed-modal-container">
        <div className="ed-modal-content">
            <div className='ed-modal-h'>
                <span className="ed-close" onClick={handleClose}>&times;</span>
                <span className='ed-t-d-c'>
                  <p>{vd.vTitle}</p> <button className='ed-del-btn' onClick={handelDeletedetails}>Delete</button>
                </span>
            </div>
          <div className='ed-form-con'>
           
            <form className='form-con'>
                <div className='form-t-con'>
                  <span>Video Details</span><button onClick={(e)=>onsubmitup(e)}>Save</button>
                </div>
                <div className='form-b-con'>
                  <div className='form-right'>
                    <div className='form-video-card'>
                      <div className='ed-con'>
                        <img src={`https://i.ibb.co${editedData.tUrl}`} alt='thumbnail' loading='lazy'/>
                          <div className='form-video-overlay'>
                            <span className='ed-icon'>
                              <input
                                type='file'
                                id='ed-file-image'  
                                accept='image/*'
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                              />
                              <i id='up-btn-icon'  className="fa-solid fa-pen"
                                  onClick={() => document.getElementById('ed-file-image').click()}>
                              </i>
                            </span>
                          </div>
                        </div>
                        <span>
                          <p>Video URL : {editedData.vUrl}</p>
                          <input type='text' 
                                id='ed-turl' 
                                name='tUrl' 
                                placeholder='Title' 
                                value={editedData.tUrl || ''}
                                readOnly
                                onChange={(e) => handleInputChange(e, 'vTitle')}
                            />
                        </span>
                    </div>
                  </div>
                  <div className='form-left'>
                    <div id='row-1' >
                      <label htmlFor='ed-title'>Title</label>
                      <input type='text' 
                        id='ed-title' 
                        name='vTitle' 
                        placeholder='Title' 
                        value={editedData.vTitle || ''}
                        onChange={(e) => handleInputChange(e, 'vTitle')}
                      />
                    </div>
                    <div id='row-2'>
                    <label htmlFor='ed-description'>Description</label>
                    <textarea 
                        id='ed-description' 
                        name='description' 
                        placeholder='Description' 
                        value={editedData.description || ''}
                        onChange={(e) => handleInputChange(e, 'description')}
                        rows={5}
                        required
                      />
                    </div>
                  </div>
                </div>
            </form>
          </div>
          {showDeleteConfirmation && (
          <div className="delete-confirmation">
            <div className='delete-con-mes'>
              <p>Are you sure you want to delete the video?</p>
              <div className='delete-con-btn-con'>
                <button id='del-yes-btn' onClick={confirmDeletedetails}>Yes</button>
                <button id='del-no-btn' onClick={handleCancelDelete}>No</button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    );
}

export default EditModal