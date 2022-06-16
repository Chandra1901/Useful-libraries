import React from 'react'
import ReactPlayer from 'react-player'


const VideoPlay = () => {

    
  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=9boMnm5X9ak'
        controls
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  )
}

export default VideoPlay