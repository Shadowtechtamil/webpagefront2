import React from 'react'

const Progressbar = ({progress}) => {
    const Parentdiv = {
        width: '100%',
        height:15,
        marginTop:10,
        borderRadius:50,
        backgroundColor:'white',
      }
      const Childdiv = {
        height:'100%',
        width: `${progress}%`,
        borderRadius:50,
        backgroundColor: '#3b71cb',
      }
      const progresstext = {
        padding:15,
        color: 'black',
        fontWeight: 600,
        textWrap: 'nowrap',
        fontSize:'0.7rem',
      }
      let progressMessage = '';

      if (progress === 0) {
        progressMessage = 'Waiting for upload';
      } else if (progress === 100) {
        progressMessage = 'Upload completed';
      } else {
        progressMessage = `Uploading ${progress}%`;
      }

  return (
    <section style={Parentdiv}>
        <section style={Childdiv}>
          <span style={progresstext}>{progressMessage}</span>
        </section>
    </section>
  );
};

export default Progressbar