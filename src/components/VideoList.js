import React from 'react';
import VideoItems from './VideoItems';

const VideoList = (props) => {
  const renderedList = props.videoList.map((video) => {
    return (
      <VideoItems
        key={video.id.videoId}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
