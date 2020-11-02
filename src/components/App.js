import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useYoutubeSearch from '../hooks/useYoutubeSearch';

const App = () => {
  const [defaultSearchTerm] = useState('Cars');
  const [videos, searchYouTube] = useYoutubeSearch(defaultSearchTerm);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <SearchBar
        defaultSearchTerm={defaultSearchTerm}
        onSearchSubmit={searchYouTube}
      />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={setSelectedVideo} videoList={videos} />
            {/***
             *Other way of writing the above code which has a same out put

             alternate 1:- <VideoList onVideoSelect={onVideoSelect} videoList={videos} />
             alternate 2:- <VideoList onVideoSelect={(video) => {setSelectedVideo(video);}} videoList={videos}/>
             */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
