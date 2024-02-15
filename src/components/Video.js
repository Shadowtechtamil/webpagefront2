import moment from 'moment';
import './compCss/Video.css';
import Viewscount from '../routes/adminpanelroutes/Viewscount';
const Video = (vdetails) => 
{

  //formate date for showing secs,minutes,hours,days,weeks,months,years like 1 minuts ago,15 hours ago etc..,
  const formatTimeDifference = (postedDate) => {
    const now = moment();
    const diffInSeconds = now.diff(postedDate, 'seconds');
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = now.diff(postedDate, 'minutes');
      return `${diffInMinutes} minutes ago`;
    } else if (diffInSeconds < 86400) {
      const diffInHours = now.diff(postedDate, 'hours');
      return `${diffInHours} hours ago`;
    } else if (diffInSeconds < 2592000) {
      const diffInDays = now.diff(postedDate, 'days');
      return `${diffInDays} days ago`;
    } else if (diffInSeconds < 31536000) {
      const diffInMonths = now.diff(postedDate, 'months');
      return `${diffInMonths} months ago`;
    } else {
      const diffInYears = now.diff(postedDate, 'years');
      return `${diffInYears} years ago`;
    }
  };

console.log(vdetails.url);
  return (
    
    <div className='video-main-frame'>
        <div className='video-screen-container-frame'>
          <div class="wistia_responsive_padding" >
              <div class="wistia_responsive_wrapper" >
                <div class={`wistia_embed wistia_async_${vdetails.url} seo=true videoFoam=true`} >
                  <div class="wistia_swatch" >
                    <img id='video-screen-1' src={`https://fast.wistia.com/embed/medias/${vdetails.url}/swatch`} alt='' onload="this.parentNode.style.opacity=1;" />
                  </div>
                </div>
              </div>
            </div>
            <h3>{vdetails.title}</h3>
            <div className='card-vd-details'>
              <span><Viewscount id={vdetails.url} /></span><span>views</span>
              <span>{formatTimeDifference(vdetails.date)}</span>
            </div>
        </div>
    </div>
  );
}

export default Video