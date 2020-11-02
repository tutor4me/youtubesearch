import React from 'react';
import './videoitem.css';

const VideoItems = (props) => {
  const { thumbnails, title } = props.video.snippet;
  return (
    <div
      className='video_item item'
      onClick={() => props.onVideoSelect(props.video)}
    >
      <img alt={title} className='ui image' src={thumbnails.medium.url} />
      <div className='content'>
        <div className='header'> {title}</div>
      </div>
    </div>
  );
};

export default VideoItems;
