import { useState, useEffect } from 'react';
import youtube from '../api/youtubeAPI';

const useYoutubeSearch = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchYouTube(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const searchYouTube = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, searchYouTube];
};

export default useYoutubeSearch;
