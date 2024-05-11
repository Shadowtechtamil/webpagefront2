import React from 'react'
import './Star.css';

const Star = ({ rating}) => {
    return (
        <div>
        {[1, 2, 3, 4, 5].map((star) => {
          return (  
            <span
              className='star'
              style={{
                cursor: 'pointer',
                color: rating >= star ? 'gold' : 'gray',
                fontSize: `15px`,
                marginLeft:`10px`
              }}
            >
              {' '}
              <i class="fa-solid fa-star"></i>
              {' '}
            </span>
          )
        })}
      </div>
    );
}

export default Star